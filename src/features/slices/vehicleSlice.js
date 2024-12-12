import { createSlice } from "@reduxjs/toolkit";
import { getVehicles } from "../actions/vehicleAction";
import { toast } from "sonner";

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  vehicleInfo: null,
  message: null,
};

const vehicleSlice = createSlice({
  name: "vehicle",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getVehicles.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getVehicles.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload ;
        toast.error(action.payload, {
          position: "top-center",
        });
      })
      .addCase(getVehicles.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.vehicleInfo = action.payload;
        toast.success("Vehicles found", { position: "top-center" });
      });
  },
});

export default vehicleSlice.reducer;
