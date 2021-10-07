import React from "react";
import "./Recipe.css";

export default function Recipe({recipe}) {
    const {label, image, url} = recipe.recipe;
    return (
        <div className="container recipe text-center">
                        <h2>{label}</h2>
                        <img src={image} alt={label} className="recipe-image img-fluid" />
                        <a href={url} target="_blank" rel="noreferrer" className="btn btn-recipe py-1 my-3">Go to Recipe</a>
            </div>
        );
}
