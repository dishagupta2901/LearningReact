import React, { useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import Shimmer from "./Shimmer";
import useAPICalls from "../utils/useAPICalls";
import AccordionComponent from "../reusableComponents/AccordianComponent";

const MenuComponent = () =>{
    const {id} = useParams();
    const resInfo : any = useAPICalls("https://jsonplaceholder.typicode.com/albums/"+id);
    const albumListPhotos : any = useAPICalls("https://jsonplaceholder.typicode.com/photos?albumId="+id);
    const [visibleIndex, setVisibleIndex] = useState(null);
    // console.log(albumListPhotos);
    
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

    //   console.log(resInfo);
      
    if (resInfo === undefined && albumListPhotos === undefined)
        return <Shimmer/>
    
    return(
        <>
        <div className="m-4 p-4 shadow-sm bg-slate-400 rounded-md hover:bg-slate-50 max-w-auto min-w-fit">
            <h3 className="font-bold font-mono">Id: {resInfo?.id}</h3>
            <h1 className="font-semibold font-thin p-2 m-2">Title: {resInfo?.title}</h1>
            <h1 className="font-semibold font-thin p-2 m-2">UserId: {resInfo?.userId}</h1>
        </div>
        <div>
            {albumListPhotos?.map((item:any, index)=>
                 <AccordionComponent 
                    key={item?.id}
                    data = {item} 
                    showItems = {index === visibleIndex ? true : false}
                    currentIndex = {index}
                    setVisibleIndex={() => {
                        setVisibleIndex(index);
                    }
                    }
                    setVisibleIndexNull = {()=>{setVisibleIndex(null);}}
                    visibleIndex={visibleIndex}
                />

            )}
        </div>
        </>
    )
}

export default MenuComponent;