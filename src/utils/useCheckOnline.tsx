import React, { useEffect, useState } from "react";

const useCheckOnline = () =>{
    const [isOnline, setIsOnline] = useState<boolean>(true);

    useEffect(()=>{
        window.addEventListener("online", (event) => {
           setIsOnline(true);
          });
        
        window.addEventListener("offline", (event) => {
        setIsOnline(false);
        });
        // console.log(isOnline);
        
        
    },[]);

    return isOnline;
}

export default useCheckOnline;