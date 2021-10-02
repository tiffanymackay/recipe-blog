import React from "react";
import bites from "./bites.png";
import cakes from "./cakes.png";
import brews from "./brews.png";
import "./Categories.css";

export default function Categories() {
    return (
        <>
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