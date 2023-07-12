import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice.js";
import OrderSlice from "./OrderSlice.js";

const Store = configureStore({
  reducer: {
    cart: CartSlice,
    other: OrderSlice,
  },
});
export default Store;
