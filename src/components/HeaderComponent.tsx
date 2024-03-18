import React from "react";
import "../../index.css";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
// const Link = require("react-router-dom").Link;
const HeaderComponent = () =>{
    return(
        <div className="header">
            <div className="logo_container">
                <img className="logo"
                    src={LOGO_URL}
                    alt="my Logo!"
                />
            </div>
            <div className="nav_items">
                <ul>
                    <li>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link to={"/about"}>About Us</Link>
                    </li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
}

export default HeaderComponent;