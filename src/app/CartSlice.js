import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  cartState: false,
  cartItems: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [], //let database
};

const CartSlice = createSlice({
  initialState,
  name: "cart",
  reducers: {
    setOpenCart: (state, action) => {
      state.cartState = action.payload.cartState;
    },

    setCloseCart: (state, action) => {
      state.cartState = action.payload.cartState;
    },
    setAddItemToCart: (state, action) => {
      const ItemInex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (ItemInex >= 0) {
        state.cartItems[ItemInex].cartQuantity += 1;

        toast.success(`Item QTY Increased`);
      } else {
        const temp = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(temp);

        toast.success(`${action.payload.title} added to Cart`);
      }
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
  },
});
export const { setOpenCart, setCloseCart, setAddItemToCart } =
  CartSlice.actions;
export const selectScartItems = (state) => state.cart.cartItems;
export const selectScartState = (state) => state.cart.cartState;
export default CartSlice.reducer;
