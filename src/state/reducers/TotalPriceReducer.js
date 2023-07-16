import { createSlice } from "@reduxjs/toolkit";

export const TotalPrice = createSlice({
    name : "totalPrice",
    initialState : 0,
    reducers : {
        setTotalPrice : (state,action)=>{
            return state += action.payload
        },
        minusPrice : (state,action)=>{
            console.log(action.payload)
            return state -= action.payload
        }
    }
})


export const {setTotalPrice,minusPrice} = TotalPrice.actions
export default TotalPrice.reducer