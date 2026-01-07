import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api/api";

export const login = createAsyncThunk(
  "auth/login",
  async (credentials) => {
    const res = await api.post("login/", credentials);
    localStorage.setItem("access", res.data.access);
    return res.data;
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: { isAuthenticated: false },
  reducers: {
    logout(state) {
      localStorage.removeItem("access");
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state) => {
      state.isAuthenticated = true;
    });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
