import {React, useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import Shimmer from "./Shimmer";
import useAPICalls from "../utils/useAPICalls";

const MenuComponent = () =>{
    const {id} = useParams();
    const resInfo = useAPICalls("https://jsonplaceholder.typicode.com/albums/"+id);
    // const [resInfo, setResInfo] = useState();

    // const fetchData = async() =>{
    //     const data = await fetch("https://jsonplaceholder.typicode.com/albums/"+id);
    //     const jsonData = await data.json();
    //     console.log(data, jsonData, id);
        
    //    setResInfo(jsonData);
    // }

    // useEffect(() => {
    //      fetchData();
    //   },[]);

      console.log(resInfo);
      
    if (resInfo === undefined )
        return <Shimmer/>
    
    return(
        <>
        <div className="m-4 p-4 shadow-sm bg-slate-400 rounded-md hover:bg-slate-50 max-w-auto min-w-fit">
            <h3 className="font-bold font-mono">Id: {resInfo?.id}</h3>
            <h1 className="font-semibold font-thin p-2 m-2">Title: {resInfo?.title}</h1>
            <h1 className="font-semibold font-thin p-2 m-2">UserId: {resInfo?.userId}</h1>
        </div>
        </>
    )
}

export default MenuComponent;