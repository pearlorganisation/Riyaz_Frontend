import { createSlice } from "@reduxjs/toolkit";

import { toast } from "sonner";
import { searchVehicles } from "../actions/vehicleAction";

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  vehicles: null,
  message: null,
};

const vehiclesSlice = createSlice({
  name: "vehicle",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(searchVehicles.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(searchVehicles.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload, { position: "top-center" });
      })
      .addCase(searchVehicles.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.vehicles = action.payload;
      });
  },
});

export default vehiclesSlice.reducer;
