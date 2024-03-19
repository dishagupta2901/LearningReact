import React from "react";
import "../../index.css";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useCheckOnline from "../utils/useCheckOnline";
// const Link = require("react-router-dom").Link;
const HeaderComponent = () =>{
    const isOnline = useCheckOnline();

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
                    <li style={isOnline ? {color: "green"} : {color: "red"}}>Status : { isOnline ? "Online" : "Offline"} </li>
                </ul>
            </div>
        </div>
    );
}

export default HeaderComponent;