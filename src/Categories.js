import React, { useState } from "react";
import axios from "axios";
import bites from "./bites.png";
import cakes from "./cakes.png";
import brews from "./brews.png";
import "./Categories.css";

export default function Categories() {
    let [search, getSearch] = useState("");

    const apiKey = "e8676c8266aadaf43d24ffa925e4def1";
    const apiId = "d4c0f14c";
    const apiUrl = `https://api.edamam.com/search?q=${search}&dishType=Desserts&app_id=${apiId}&app_key=${apiKey}`;
    

    const handleResponse = async () => {
        const result = await axios.get(apiUrl);
        console.log(result);
        getSearch("");
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
            <div class="container mx-auto py-4">
                <form className="form-inline mx-auto">
                        <div className="row">
                            <div className="col-9">
                                <input onChange={onChange} value={search} type="text" className="form-control" placeholder="Search for a dessert" /> 
                            </div>
                            <div className="col-1">
                                <button onClick={onSubmit} type="submit" className="btn btn-dark">Submit</button>
                            </div>
                        </div>
                </form>
            </div>

        <div className="container category-block">
            <div className="row">
                <div className="col">
                    <img src={bites} className="category-img img-fluid" alt="bites category" />
                    <h2 className="category-tag py-3">Chocolate Cup Bites</h2>
                </div>
                <div className="col">
                    <img src={cakes} className="category-img img-fluid" alt="cakes category" />
                    <h2 className="category-tag py-3">Chocolate Cake</h2>
                </div>
                <div className="col">
                    <img src={brews} className="category-img img-fluid" alt="brews category" />
                    <h2 className="category-tag py-3">Hot Chocolate</h2>
                </div>
            </div>
        </div>
        <div className="container text-center py-2"><button className="btn btn-dark">View More Recipes</button></div>
        </>
    );
}