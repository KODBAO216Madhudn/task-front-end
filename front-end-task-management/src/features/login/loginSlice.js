import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { USER_SIGNIN, USER_SIGNUP } from "../../routes/routes";
import axios from "axios";

// -------------------------------------------------------------------------------

export const userLogin = createAsyncThunk(
  "login/userLogin",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(USER_SIGNIN, data, {
        withCredentials: true,
      });

      return response;
    } catch (err) {
      return rejectWithValue(err.response);
    }
  }
);

export const userSignup = createAsyncThunk(
  "login/userSignup",
  async (data, { rejectWithValue }) => {
    console.log("data ", data);
    console.log("USER_SIGNUP ", USER_SIGNUP);
    try {
      const response = await axios.post(USER_SIGNUP, data, {
        withCredentials: true,
      });

      return response;
    } catch (err) {
      return rejectWithValue(err.response);
    }
  }
);

// --------------------------------------------------------------------------------------

const loginSlice = createSlice({
  name: "login",
  initialState: {
    loginData: [],
    selectedData: {},
    message: "",
    errMessage: "",
    loading: false,
  },
  reducers: {
    resetMessage: (state, action) => {
      state.message = "";
      console.log("coming ", state.message);
    },
    resetErrMessage: (state, action) => {
      state.errMessage = "";
    },
    rowSelect: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder.addCase(userLogin.pending, (state, { payload }) => {
      state.loading = true;
    });
    builder.addCase(userLogin.fulfilled, (state, { payload }) => {
      state.loginData = payload?.data;
      state.message = payload?.data?.message;
      state.loading = false;
    });
    builder.addCase(userLogin.rejected, (state, { payload }) => {
      state.errMessage = payload?.data?.message;
      state.loading = false;
    });
    builder.addCase(userSignup.pending, (state, { payload }) => {
      state.loading = false;
    });
    builder.addCase(userSignup.fulfilled, (state, { payload }) => {
      state.loginData = payload?.data;
      state.message = payload?.data?.message;
      state.loading = false;
      console.log("fulfilled", payload);
    });
    builder.addCase(userSignup.rejected, (state, { payload }) => {
      state.errMessage = payload?.data?.message;
      state.loading = false;
    });
  },
});

export const { resetMessage, resetErrMessage, rowSelect } = loginSlice.actions;
export default loginSlice.reducer;
