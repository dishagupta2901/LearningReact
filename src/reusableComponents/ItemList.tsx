import React from "react"
import { useDispatch } from "react-redux";
import { removeItem, addItem } from "../redux/CartSlice";

const ItemList = (props) =>{
    const {data, doAddItem} = props;
    const dispatch = useDispatch();

    const handleCart = (item) =>{
        if(doAddItem){
            dispatch(addItem(item));
        }
        else if(!doAddItem){
            dispatch(removeItem(item));
        }

        console.log(data, doAddItem, item);
        
    }

    return(<div className ="flex p-6 m-6">
            <div>
                <div className="font-mono text-lg">Album Id : {data.albumId}</div>
                <div className="font-mono text-lg">Title : {data.title}</div>
                <div className="font-mono text-lg">Image url : <a 
                    className="underline text-blue-500 font-serif" 
                    href={data.url} 
                    target="_blank" 
                    rel="noopener noreferrer"> {data.url} </a>
                </div>
            </div>
            <div>
                <img src={data?.thumbnailUrl} alt={data.title}></img>
                <button 
                    className="border p-2 m-2 max-w-fit text-xs bg-slate-100 text-black font-semibold hover:bg-slate-600 hover:text-white rounded-lg shadow-lg"
                    onClick={()=> handleCart(data)}>
                    {doAddItem ? "Add + " : "Remove -"}
                </button>
            </div>
        </div>
    );
}

export default ItemList;