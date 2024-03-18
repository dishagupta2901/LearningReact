import React from "react";
import ResCardComponent from "./ResCardComponent";
// import RES_DATA from "../utils/mockData";
import { useState, useEffect } from "react";
import {Link} from "react-router-dom";

const BodyComponent = () =>{
    const [topRatedResList, setTopRatedResList] = useState([]);
    const [AllAlbumData, setAllAlbumData] = useState([]);


    const fetchData = async() =>{
        const data = await fetch("https://jsonplaceholder.typicode.com/albums");
        const jsonData = await data.json();
        
        setTopRatedResList(jsonData);
        setAllAlbumData(jsonData);
    }

    useEffect(() => {
         fetchData();
      },[]);

    return(
        <div className="body">
            <div className="filter_btn_container"> 
                <button className="filter_btn" onClick={()=>{setTopRatedResList(AllAlbumData.filter((res)=> (res?.userId) === 4))}}>
                    Top Rated Albums
                </button>
            </div>
            <div className="filter_btn_container"> 
                <input className="search_bar" 
                    onChange={(e)=>{
                        console.log(e.target?.value, e);
                        setTopRatedResList(AllAlbumData.filter((res)=> res?.title?.includes(e.target.value)));
                    }}
                    placeholder="Search"
                >
                </input>
            </div>
            <div className="res_container">
                {topRatedResList.map((res)=>
                    <Link key= {res.id} to ={"/restaurant/"+res.id}>
                        <ResCardComponent 
                            key = {res.id}
                            resData = {res}
                        />
                    </Link>
                )}
            </div>
        </div>
    )
}

export default BodyComponent;