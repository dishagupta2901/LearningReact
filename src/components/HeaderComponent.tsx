import React from "react";
import "../../index.css";
import { LOGO_URL } from "../utils/constants";
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
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
}

export default HeaderComponent;