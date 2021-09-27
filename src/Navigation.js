import React from "react";
import logo from './logo.png';

export default function Navigation() {
    return (
        <div className="container-fluid px-3">
            <a className="navbar-brand" href="/">
                <img src={logo} className="App-logo" alt="logo" width="300px" />
            </a>
            <div className="d-inline-flex">
            <ul className="navbar-nav">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/">Features</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/">Pricing</a>
                </li>
            </ul>
            </div>
        </div>
    );

}