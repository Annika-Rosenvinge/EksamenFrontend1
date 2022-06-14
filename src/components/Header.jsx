import React from "react";
import NavBar from "./NavBar";
import {NavLink} from "react-router-dom";

const Header = () =>{
    return(
        <div>
        <header className="header" >
            <p className="headerText">Eksamensprojekt</p>
        </header>
            <NavBar/>
        </div>
    )
}
export default Header;