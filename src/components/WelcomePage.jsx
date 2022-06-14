import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import {NavLink} from "react-router-dom";
import NavBar from "./NavBar";

const WelcomePage = ({name, role}) => {
    return (
        <div>
            <div className="divComp">
                <p className="headerText"> Velkommen til match system </p>
                <p className="minorHeaderText">24 timers eksamens projekt</p>
            </div>
        </div>

    )
}
export default WelcomePage;