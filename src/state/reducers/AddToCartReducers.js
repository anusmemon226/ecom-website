import { createSlice } from "@reduxjs/toolkit";

export const AddToCart = createSlice({
    name : "addtocart",
    initialState : [],
    reducers : {
        AddProducts : (state,action)=>{
            state.push({item : action.payload,initialQty:1,totalPrice:(action.payload.price-action.payload.discount)})
        },
        UpdateQuantity : (state,action)=>{
            state.map((items)=>{
                if(items.item.id===action.payload.id){
                    items.initialQty=action.payload.qty
                    items.totalPrice=(items.item.price-items.item.discount)*action.payload.qty
                }
                return false
            })
        },
        RemoveProducts : (state,action)=>{
            state.splice(action.payload,1)
        }
    }
})

export const {AddProducts,UpdateQuantity,RemoveProducts} = AddToCart.actions
export default AddToCart.reducer;