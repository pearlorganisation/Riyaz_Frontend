import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../services/axiosInterceptor";

export const createContact = createAsyncThunk(
    "create/contact", async({name, email, phoneNumber, message},{ rejectWithValue })=>{
        try {
            const config={
                headers:{
                    "Content-Type": "application/json"
                }
            }
            const {
                response
            } = await axiosInstance.post(`/contacts`,{name, email, phoneNumber, message},{config});
            return response
        } catch (error) {
                if (error.response && error.response.data.message) {
                    return rejectWithValue(error.response.data.message);
                } else {
                    return rejectWithValue(error.message);
                }
        }
    }
)