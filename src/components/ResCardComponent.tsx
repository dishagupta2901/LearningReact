import React from "react";

const ResCardComponent = (props) =>{
    const {resData} = props;
    console.log(resData, props);
    return(
        <div className="res_card">
            <img 
                src="https://i0.wp.com/yummraj.com/wp-content/uploads/2013/10/img_8133.jpg"
                alt="res_logo"
                className="res_logo" 
            />
            <h4>{resData.name}</h4>
            <h5>{resData.cuisines.join(", ")}</h5>
            <h5>{resData.avgRating}</h5>
            <h5>{resData.costForTwo}</h5>
        </div>
    )
}

export default ResCardComponent;