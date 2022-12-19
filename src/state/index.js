import { createSlice } from "@reduxjs/toolkit";

/*eslint-disable */
let user;
if (localStorage.getItem("user") !== "undefined") {
  user = JSON.parse(localStorage.getItem("user"));
} else user = null;

const initialState = {
  mode: "dark",
  userId: "63701cc1f03239b7f700000e",
  loggedIn: false,
  loggedUser: user,
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setLoggedIn: (state) => {
      state.loggedIn = state.loggedIn === false ? true : false;
    },
    setLoggedUser: (state = state, res) => {
      state.loggedUser = res.payload;
    },
  },
});

export const { setMode, setLoggedIn, setLoggedUser } = globalSlice.actions;

export default globalSlice.reducer;
/*eslint-disable */
