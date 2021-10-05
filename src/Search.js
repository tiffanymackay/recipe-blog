import React from "react";
import './Search.css';

export default function Search() {
    return (
        <form className="form-inline mx-auto">
                <div className="row">
                    <div className="col-8">
                        <input type="text" className="form-control" placeholder="Search" /> 
                    </div>
                    <div className="col-2">
                        <button type="submit" className="btn btn-dark">Submit</button>
                    </div>
                </div>
        </form>
    );
}