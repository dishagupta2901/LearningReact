import React from "react";

const ResCardComponent = (props) =>{
    const {resData} = props;
    // console.log(resData, props);
    return(
        <div className="w-40 min-h-40 max-h-fit p-2  m-2 border border-gray-500 bg-slate-500 text-white rounded hover:bg-slate-200 hover:text-black shadow-md overflow">
            {/* <img 
                src="https://i0.wp.com/yummraj.com/wp-content/uploads/2013/10/img_8133.jpg"
                alt="res_logo"
                className="res_logo" 
            /> */}
            <h4 className="font-bold font-mono text-lg mb-2">Id: {resData?.id}</h4>
            <h5 className=" mb-2">User Id: {resData?.userId}</h5>
            <h5 className=" mb-2">Title Id: {resData?.title}</h5>
        </div>
    )
}

export const withLabel = (ResCard) =>{
    return (props)=>{
        return(
            <div>
                <label className="absolute bg-slate-700 text-slate-100 font-semibold font-mono text-sm opacity-80 mb-6 h-5"> Even </label>
                <ResCard {...props}/>
            </div>
        )
    }
}

export default ResCardComponent;