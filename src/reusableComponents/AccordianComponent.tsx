import React from "react";

const AccordionComponent = (props : any)=>{
    const { data, currentIndex, visibleIndex, setVisibleIndex, setVisibleIndexNull, showItems } = props;

    const handleClick = () =>{
        if(currentIndex === visibleIndex)
            setVisibleIndexNull();
        else
            setVisibleIndex();
    }

    return( 
    <div className="p-2 m-2 w-6/12 justify-between shadow-lg bg-slate-500 text-white rounded-md p-2 mx-4 my-1 hover:bg-slate-300 hover:text-black">
        <div className="accordianHeader  flex justify-between " onClick={()=>handleClick()}>
            <div className="font-bold text-lg">Id : {data.id}</div>
            <span className="font-bold text-2xl">{showItems ? "-" : "+"}</span>
        </div>
        {showItems ? <div className="flex p-6 m-6">
            <div >
                <div className="font-mono text-lg">Album Id : {data.albumId}</div>
                <div className="font-mono text-lg">Title : {data.title}</div>
                <div className="font-mono text-lg">Image url : <a className="underline text-blue-500 font-serif" href={data.url} target="_blank" rel="noopener noreferrer"> {data.url} </a></div>
            </div>
            <div>
                <img src={data?.thumbnailUrl} alt={data.title}></img>
            </div>
        </div> : null}
        
        
    </div>);
}

export default AccordionComponent