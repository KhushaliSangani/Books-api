import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { BookReducers } from "./Books/reducer";

let rootReducer = combineReducers({
  BookReducers,
});

const store = configureStore({ reducer: rootReducer });

export default store;