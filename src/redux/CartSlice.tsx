import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name : "Cart_Slice",
    initialState : {
        itemsList : []
    },
    reducers : {
        addItem : (state, action) =>{
            console.log(action.payload, action);
            
            state.itemsList.push(action.payload)
        },
        removeItem : (state, action) =>{
            state.itemsList.splice(action.payload , 1)
        },
        clearCart : (state) =>{
            state.itemsList.length = 0
        }
    }
})

export const {addItem, removeItem, clearCart} = CartSlice.actions;

export default CartSlice.reducer;