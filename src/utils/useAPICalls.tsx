import { useState, useEffect } from "react";

const useAPICalls = (url : any) =>{
    const [data, setData] = useState();

    useEffect(()=>{
        
        fetchData();
        console.log(data);
        
    }, []);

    const fetchData = async() =>{
        console.log(url);
        
        const apiData = await fetch(url);
        const json = await apiData.json();

        console.log("fetching data",apiData, json);
        setData(json);
    }
    return data;
}

export default useAPICalls;