import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import {NavLink} from "react-router-dom";
import NavBar from "./NavBar";

const SecondPage = ({name, role}) => {
    return (
        <div className="divPadding">
            <Header/>
            <div className="divComp">
                <p className="overskrift"> Anden side </p>
            </div>
            <Footer/>
        </div>

    )
}
export default SecondPage;