import React from "react";
import {Link, NavLink} from "react-router-dom";
import WelcomePage from "./WelcomePage";

const NavBar = () =>{
    return(
        <div className="tab-bar">
            <nav>
                <a className="tab-bar-link" href="/">Forside</a>
                <a className="tab-bar-link" href="/matches">Matches</a>
                <a className="tab-bar-link" href="/adminpage">Administrator</a>
            </nav>
        </div>
    )
}

export default NavBar;
