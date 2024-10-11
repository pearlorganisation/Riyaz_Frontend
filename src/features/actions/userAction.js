import axios from "axios";
import {
    createAsyncThunk
} from "@reduxjs/toolkit";

const localURL = "http://localhost:3000/api/v1";

export const getUserProfile = createAsyncThunk(
    "user/getProfile",
    async (_, {
        rejectWithValue
    }) => {
        try {
            const config = {
                withCredentials: true,
                headers: {
                    "Content-Type": "application/json",
                },
            };
            const {
                data
            } = await axios.get(`${localURL}/users/profile`, config);

            console.log("Profile Data", data);

            return data.data;
        } catch (error) {
            // return custom error message from backend if present
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
);

export const updateUserProfile = createAsyncThunk(
    "user/updateProfile",
    async ({
        mobileNumber,
        email,
        name,
      
    }, {
        rejectWithValue
    }) => {
        try {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                },
            };
            const {
                data
            } = await axios.put(
                `${localURL}/users/profile`, {
                    email,
                
                    mobileNumber,
                    name
                },
                config
            );

            console.log(data, "update user profile data");

            return data;
        } catch (error) {
            console.log("Error", error);
            // return custom error message from API if any
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
);