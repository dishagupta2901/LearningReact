import React, { useContext } from "react"; 
import AppContext from "../utils/AppContext";
import ItemList from "../reusableComponents/ItemList";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../redux/CartSlice";

const CartComponent = () =>{

    const {currentUser} = useContext(AppContext);
    const cartInfo = useSelector((store)=>store.Cart.itemsList)
    const dispatch = useDispatch();
    console.log("cart info", cartInfo);
    
    return(
        <div>
            <div className="flex justify-center p-2 m-2">
                <span className = "font-bold text-lg p-2 m-2">{currentUser}'s Cart</span> 
                <span className = "p-2 my-2 text-right underline text-blue-400 hover:text-blue-950"
                    onClick={()=>{
                        dispatch(clearCart());
                    }}>Clear Cart</span>
            </div>
            <div className="justify-center p-2 mx-12 my-2 w-9/12 shadow-m">
                {cartInfo?.length ? cartInfo.map((item)=><ItemList key={item.id} data={item} doAddItem={false}/>) : <h1 className="font-bold text-xl p-2 m-2">Cart is Empty!!</h1>}    

            </div>
        </div>
    );
}

export default CartComponent;