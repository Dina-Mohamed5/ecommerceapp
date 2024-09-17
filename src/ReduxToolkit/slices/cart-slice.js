import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    initialState:[],
    name:'cartSlice',
    reducers:{
        addToCart:(state,action) => {
            const findProduct = state.find((product) => product.id === action.payload.id);
            if(findProduct){
                findProduct.quantity +=1;
            }
            else{
                const cloneProduct = {...action.payload, quantity:1}
                state.push(cloneProduct);
            }
        }
        ,
        deleteFromCart: (state,actions) =>{
            return state.filter((product) => product.id !== actions.payload.id)
        },
        clear: (state,actions) => {
            return [];
        }
    }
});

export default cartSlice.reducer;
export const {addToCart, deleteFromCart, clear} = cartSlice.actions;
