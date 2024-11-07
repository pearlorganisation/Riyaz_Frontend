/** http://localhost:3000/api/v1/vehicles */

import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { localURL } from "./userAction";

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

      const { data } = await axios.get(`${localURL}/vehicles`, config);
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
