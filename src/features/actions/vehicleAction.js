import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../services/axiosInterceptor";

export const getVehicles = createAsyncThunk(
  "vehicle/getVehicle",
  async (params, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
        params, // accepting params
      };

      const { data } = await axiosInstance.get(`/vehicles`, config);
      console.log("Filtered Vehicles Data", data);
      return data.data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
