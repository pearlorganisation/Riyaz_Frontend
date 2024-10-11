import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const localURL = "http://localhost:3000/api/v1";

export const registerUser = createAsyncThunk(
  "auth/register",
  async ({ name, email, password, mobileNumber }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        `${localURL}/auth/signup`,
        { name, email, password, mobileNumber },
        config
      );

      console.log("Register Data", data);
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

export const userLogin = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const config = {
        withCredentials:true,
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        `${localURL}/auth/login`,
        { email, password },
        config
      );

      console.log(data, "asdasdasdasddasdasdasdasd");
      // store user's token in local storage
      // localStorage.setItem("isLoggedIn", true);

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
