import { createSlice } from "@reduxjs/toolkit";
import { registerUser, userLogin } from "../actions/authAction";

import { PURGE } from "redux-persist";
import { toast } from "sonner";

const initialState = {
  isLoading: false,
  isUserLoggedIn: false,
  userInfo: null,
  isError: false,
  message: null,
  isSuccess: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearUser: (state) => {
      state.isUserLoggedIn = false;
      state.userInfo = null;
    },
    // logout: (state) => {
    //   localStorage.removeItem("isLoggedIn");
    //   state.isLoading = false;
    //   state.userInfo = null;
    //   state.userToken = null;
    //   state.message = null;
    //   state.isError = false;
    //   state.isSuccess = false;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(userLogin.pending, (state) => {
        state.isLoading = true;
      }),
      builder
        .addCase(registerUser.rejected, (state, action) => {
          state.isLoading = false;
          state.isSuccess = false;
          state.isError = true;
          state.message = action.payload;
        })
        .addCase(userLogin.rejected, (state, action) => {
          state.isLoading = false;
          state.isSuccess = false;
          state.isError = true;
          state.message = action.payload;
          toast.error(action.payload, { position: "top-center" });
        }),
      builder
        .addCase(registerUser.fulfilled, (state, action) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.isError = false;
          state.message = action.payload;
          toast.success(
            "Mail sent successfully. Please check your email, i…ng the spam or junk folder to verify your account",
            { position: "top-center" }
          );
        })
        .addCase(userLogin.fulfilled, (state, action) => {
          state.isLoading = false;
          state.userInfo = action.payload;
          state.isSuccess = true;
          state.isError = false;
          state.isUserLoggedIn = true;
          state.message = "";
          toast.success("Login Successful!!", { position: "top-center" });
        });

    builder.addCase(PURGE, () => {
      return initialState;
    });
  },
});

export const { clearUser } = authSlice.actions;
export default authSlice.reducer;
