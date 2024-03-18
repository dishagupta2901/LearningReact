import {React, useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import Shimmer from "./Shimmer";

const MenuComponent = () =>{
    const {id} = useParams();
    const [resInfo, setResInfo] = useState();

    const fetchData = async() =>{
        const data = await fetch("https://jsonplaceholder.typicode.com/albums/"+id);
        const jsonData = await data.json();
        console.log(data, jsonData, id);
        
       setResInfo(jsonData);
    }

    useEffect(() => {
         fetchData();
      },[]);

      console.log(resInfo);
      
    if (resInfo === undefined )
        return <Shimmer/>
    
    return(
        <>
        <div>
            <h3>Id: {resInfo?.id}</h3>
            <h1>Title: {resInfo?.title}</h1>
            <li>UserId: {resInfo?.userId}</li>
        </div>
        </>
    )
}

export default MenuComponent;