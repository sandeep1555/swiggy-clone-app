import { createSlice } from "@reduxjs/toolkit";

const cartSlice =createSlice(
    {
        name:"cart",
        initialState:
            {
                items:[],
            },
        reducers:
            {
                additems:(state,action)=>
                {
                    state.items.push(action.payload);
                },
                removeitems:(state,action)=>
                {
                    state.items.pop();
                },
                clearitems:(state,action)=>
                {
                    state.items.length=0;
                },
            },

    }
)

export const {additems,removeitems,clearitems}=cartSlice.actions;

export default cartSlice.reducer