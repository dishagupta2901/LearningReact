import React from "react";
import ItemList from "./ItemList";

const AccordionComponent = (props : any)=>{
    const { data, currentIndex, visibleIndex, setVisibleIndex, setVisibleIndexNull, showItems, AddItem } = props;

    const handleClick = () =>{
        if(currentIndex === visibleIndex)
            setVisibleIndexNull();
        else
            setVisibleIndex();
    }


    return( 
    <div className="m-2 w-6/12 justify-between shadow-lg bg-slate-500 text-white rounded-md p-2 mx-4 my-1 hover:bg-slate-300 hover:text-black">
        <div className="accordianHeader  flex justify-between " onClick={()=>handleClick()}>
            <div className="font-bold text-lg">Id : {data.id}</div>
            <span className="font-bold text-2xl">{showItems ? "-" : "+"}</span>
        </div>
        {showItems ? <ItemList data = {data} doAddItem = {true} /> : null}
        
        
    </div>);
}

export default AccordionComponent