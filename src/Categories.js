import React from "react";
import bites from "./bites.png";
import cakes from "./cakes.png";
import brews from "./brews.png";
import "./Categories.css";

export default function Categories() {
    return (
        <div className="container category-block">
            <div className="row">
                <div className="col">
                    <img src={bites} className="category-img img-fluid" alt="bites category" />
                </div>
                <div className="col">
                    <img src={cakes} className="category-img img-fluid" alt="cakes category" />
                </div>
                <div className="col">
                    <img src={brews} className="category-img img-fluid" alt="brews category" />
                </div>
            </div>
        </div>
    );
}