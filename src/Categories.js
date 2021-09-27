import React from "react";
import bites from "./bites.png";
import cakes from "./cakes.png";
import brews from "./brews.png";

export default function Categories() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <img src={bites} className="category-img" alt="bites category" width="300px" />
                </div>
                <div className="col-4">
                    <img src={cakes} className="category-img" alt="cakes category" width="300px" />
                </div>
                <div className="col-4">
                    <img src={brews} className="category-img" alt="brews category" width="300px" />
                </div>
            </div>
        </div>
    );
}