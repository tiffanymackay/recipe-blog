import React, { useState } from "react";
import axios from "axios";
import Recipe from "./Recipe";
import { v4 as uuidv4 } from 'uuid';
import "./Categories.css";

export default function Categories(props) {
    let [keyword, getKeyword] = useState(props.defaultRecipes);
    let [recipes, setRecipes] = useState([])
    let [loaded, setLoaded] = useState(false);
    
    const handleResponse = (result) => {
        if (result.data.more === false) {
            alert("Oops! We can't find any recipes using your search query! Please try another term.");
        } else {
        setRecipes(result.data.hits);
        }
    }
    const search = () => {
        const apiKey = "e8676c8266aadaf43d24ffa925e4def1";
        const apiId = "d4c0f14c";
        const apiUrl = `https://api.edamam.com/search?q=${keyword}&dishType=Desserts&app_id=${apiId}&app_key=${apiKey}`;
        axios.get(apiUrl).then(handleResponse);
    }
    
    const onChange = (e) => {
        getKeyword(e.target.value);
    }

    const load = () => {
        setLoaded(true);
        search();
    }

    const onSubmit = (e) => {
        e.preventDefault();
        search();
    }
        if (loaded) { 
            return (
                <>
                    <div className="container d-flex justify-content-center">
                        <form className="form-inline my-auto py-2">
                                <div className="row">
                                    <div className="col-9">
                                        <input onChange={onChange} type="text" className="form-control" placeholder="Search a dessert" autoFocus={true} /> 
                                    </div>
                                    <div className="col-1">
                                        <button onClick={onSubmit} type="submit" className="btn btn-dark">Submit</button>
                                    </div>
                                </div>
                        </form>
                    </div>

                    <div className="container category-block">
                        {recipes !==[] && recipes.map(function(recipe, index) {
                            if (index < 4) {
                                return (<Recipe key={uuidv4()} recipe={recipe} />);
                            } else {
                                return null;
                                }       
                            }) 
                            }  
                    </div>
                    <div className="container text-center py-2"><a href="/about" className="btn btn-dark">About</a></div>
                </>
            );
                    } else {
                        load();
                        return ("Loading...");
                    }
}