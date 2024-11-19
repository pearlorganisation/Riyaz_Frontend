import { createSlice } from "@reduxjs/toolkit"
import { createContact } from "../actions/contactAction"
import { toast } from "sonner"

const initialState ={
    isLoading: false,
    isError: false,
    isSuccess: false,
    contactInfo:{}
}

const contactSlice = createSlice({
    name:"contact",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(createContact.pending,(state)=>{
            state.isLoading = true;
        })
        .addCase(createContact.rejected,(state,action)=>{
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            toast.error(action.payload,{position:"top-right"})
        })
        .addCase(createContact.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            toast.success("Your Information has been received",{position:"top-right"});
        })
    }
})

export default contactSlice.reducer;