import React from "react";
import ResCardComponent from "./ResCardComponent";
// import RES_DATA from "../utils/mockData";
import { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import useAPICalls from "../utils/useAPICalls";
import Shimmer from "./Shimmer";
import useCheckOnline from "../utils/useCheckOnline";

const BodyComponent = () =>{
    const [topRatedResList, setTopRatedResList] = useState([]);
    const data = useAPICalls("https://jsonplaceholder.typicode.com/albums");
    const isOnline = useCheckOnline();

    // const fetchData = async() =>{
    //     const data = await fetch("https://jsonplaceholder.typicode.com/albums");
    //     const jsonData = await data.json();
        
    //     setTopRatedResList(jsonData);
    //     setAllAlbumData(jsonData);
    // }
    // console.log("Dtaa -->", data);
    
    if(!isOnline){
        return <h1>You seems to be Offline!! Please check your Internet Connection</h1>
    }

    if (data === null || data === undefined)
        return <Shimmer/>


    return(
        <div className="body">
            <div className="filter_btn_container"> 
                <button className="filter_btn" onClick={()=>{setTopRatedResList(data?.filter((res)=> (res?.userId) === 4))}}>
                    Top Rated Albums
                </button>
            </div>
            <div className="filter_btn_container"> 
                <input className="search_bar" 
                    onChange={(e)=>{
                        console.log(e.target?.value, e);
                        setTopRatedResList(data?.filter((res)=> res?.title?.includes(e.target.value)));
                    }}
                    placeholder="Search"
                >
                </input>
            </div>
            <div className="res_container">
                { (topRatedResList === null || topRatedResList === undefined || topRatedResList.length === 0) ? (data?.map((res)=>
                    <Link key= {res?.id} to ={"/restaurant/"+res?.id}>
                        <ResCardComponent 
                            key = {res?.id}
                            resData = {res}
                        />
                    </Link>) 
                ) : (topRatedResList?.map((res)=>
                <Link key= {res?.id} to ={"/restaurant/"+res?.id}>
                    <ResCardComponent 
                        key = {res?.id}
                        resData = {res}
                    />
                </Link>)) }
            </div>
        </div>
    )
}

export default BodyComponent;