import React from "react";
import logo from './logo.png';


export default function Navigation() {
    return (
            <div class="container-fluid px-3">
                <a className="navbar-brand" href="/">
                    <img src={logo} className="App-logo" alt="logo" width="350px" />
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul class="navbar-nav">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/">home</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="/">about</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="/bites">bites</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="/">brews</a>
                        </li>
                    </ul>
                </div>
            </div>
    );

}