import { createSlice } from "@reduxjs/toolkit";
// creating a singup slice to store data in redux store

export const signUpslice = createSlice({
  name: "signUp",
  initialState: [],
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addUser } = signUpslice.actions;

export default signUpslice.reducer;
