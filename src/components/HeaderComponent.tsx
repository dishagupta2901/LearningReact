import React, { useContext } from "react";
import "../../index.css";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useCheckOnline from "../utils/useCheckOnline";
import AppContext from "../utils/AppContext";
// const Link = require("react-router-dom").Link;
const HeaderComponent = () =>{
    const isOnline = useCheckOnline();
    const {currentUser} = useContext(AppContext);

    console.log(currentUser);
    

    return(
        <div className="flex justify-between shadow-md to-blue-100">
            <div className="logo_container">
                <img className="w-36"
                    src={LOGO_URL}
                    alt="my Logo!"
                />
            </div>
            <div className="nav_items">
                <ul className="flex p-2 m-2">
                    <li className="p-2 m-2">
                        <Link 
                            className="block border border-gray-500 rounded-md py-2 px-4 text-center text-gray-700 hover:bg-gray-100 mt-2" 
                            to={"/"}>Home</Link>
                    </li>
                    <li className="p-2 m-2">
                        <Link 
                            className="block border border-gray-500 rounded-md py-2 px-4 text-center text-gray-700 hover:bg-gray-100 mt-2" 
                            to={"/about"}>About Us</Link>
                    </li>
                    <li className="p-2 m-2">Cart</li>
                    <li className="p-2 m-2" style={isOnline ? {color: "green"} : {color: "red"}}>
                        Status : { isOnline ? "Online" : "Offline"} </li>
                    <li className="p-2 m-2">{currentUser}</li>
                </ul>
            </div>
        </div>
    );
}

export default HeaderComponent;