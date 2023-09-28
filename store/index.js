import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
const store = configureStore({
  reducers : rootReducer
})


export default store