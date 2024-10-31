import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const localURL = "http://localhost:3000/api/v1";

export const searchVehicles = createAsyncThunk(
  "vehicle/getVehicle",
  async (_, { rejectWithValue }) => {
    try {
      const config = {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.get(`${localURL}/vehicles/search`, config);

      console.log("Vehicle Search Data", data);

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
