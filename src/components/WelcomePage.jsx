import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import {NavLink} from "react-router-dom";
import NavBar from "./NavBar";

const WelcomePage = ({name, role}) => {
    return (
        <div>
            <div className="divComp">
                <p className="overskrift"> Velkommen </p>
            </div>
        </div>

    )
}
export default WelcomePage;