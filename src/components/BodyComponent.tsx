import React from "react";
import ResCardComponent from "./ResCardComponent";
import RES_DATA from "../utils/mockData";
import { useState } from "react";

const BodyComponent = () =>{
    const [topRatedResList, setTopRatedResList] = useState(RES_DATA);

    return(
        <div className="body">
            <div className="filter_btn_container"> 
                <button className="filter_btn" onClick={()=>{setTopRatedResList(RES_DATA.filter((res)=> res.avgRating>=4.0))}}>
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res_container">
                {topRatedResList.map((res)=>
                    <ResCardComponent 
                        key = {res.id}
                        resData = {res}
                    />
                )}
                
                {/* <ResCardComponent 
                    resName = "KFC" 
                    cuisine = "Chicken, Burgers" 
                    rating = "4.0/5 stars"
                />
                <ResCardComponent 
                    resName = "Arsalan" 
                    cuisine = "Biriyani, Indian" 
                    rating = "4.2/5 stars"
                /> */}
                
                
            </div>
        </div>
    )
}

export default BodyComponent;