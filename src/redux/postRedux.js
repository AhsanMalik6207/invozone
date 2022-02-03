import { createSlice } from "@reduxjs/toolkit";
const currentPost=localStorage.getItem("currentPost") ? JSON.parse(localStorage.getItem("currentPost")):null;
const postSlice = createSlice({
  name: "post",
  initialState: {
    currentPost: currentPost,
    isFetching: false,
    error: false,
  },
  reducers: {
    postStart: (state) => {
      state.isFetching = true;
    },
    postSuccess: (state, action) => {
      state.isFetching = false;
      state.currentPost = action.payload;
      state.error=false;
    },
    postFailure: (state) => {
      state.isFetching = false;
      state.error = true;
      state.currentPost=null;
    },
  },
});

export const { postStart, postSuccess, postFailure} = postSlice.actions;
export default postSlice.reducer;