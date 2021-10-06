import React, { useState } from "react";
import axios from "axios";
import Recipe from "./Recipe";
import { v4 as uuidv4 } from 'uuid';
import "./Categories.css";

export default function Categories(props) {
    let [search, getSearch] = useState("");
    let [recipes, setRecipes] = useState([])

    const apiKey = "e8676c8266aadaf43d24ffa925e4def1";
    const apiId = "d4c0f14c";
    const apiUrl = `https://api.edamam.com/search?q=${search}&dishType=Desserts&app_id=${apiId}&app_key=${apiKey}`;
    

    const handleResponse = async () => {
        const result = await axios.get(apiUrl);
        if (result.data.more === false) {
            alert("Oops! We can't find any recipes using your search query! Please try another term.");
        } else {
        setRecipes(result.data.hits);
        console.log(result);
        getSearch("");
        }
    }

    const onChange = (e) => {
        getSearch(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        handleResponse();
    }
        return (
        <>
            <div class="container mx-auto">
                <form className="form-inline mx-auto">
                        <div className="row">
                            <div className="col-9">
                                <input onChange={onChange} value={search} type="text" className="form-control" placeholder="Search a dessert" /> 
                            </div>
                            <div className="col-1">
                                <button onClick={onSubmit} type="submit" className="btn btn-dark">Submit</button>
                            </div>
                        </div>
                </form>
            </div>

        <div className="container category-block">
                    {recipes !==[] && recipes.map(recipe  =>
                    <Recipe key={uuidv4()} recipe={recipe} />)
                    }
        </div>
        <div className="container text-center py-2"><a href="/About" className="btn btn-dark">About</a></div>
        </>
    );
}