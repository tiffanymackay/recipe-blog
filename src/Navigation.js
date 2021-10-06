import React from "react";
import logo from './logo.png';
import logoXs from './logo-xs.png'



export default function Navigation() {
    return (
            <div className="container-fluid px-3">
                <a className="navbar-brand" href="/">
                    <img src={logo} className="App-logo d-none d-sm-block" alt="logo" width="350px" />
                    <img src={logoXs} className="ogo d-block d-sm-none" alt="logo-extra-small" width="200px" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/">home</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="/">about</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="https://github.com/tiffanymackay/responsive-recipe" target="_blank" rel="noreferrer">github</a>
                        </li>
                    </ul>
                </div>
            </div>
    );

}