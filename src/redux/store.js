import { configureStore } from "@reduxjs/toolkit";
import categories from "./slice/Slice";

export default configureStore({
  reducer: {
    categories: categories,
  },
});
