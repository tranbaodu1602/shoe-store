import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  cartState: false,
  cartItems: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [], //let database
  cartTotalAmount: 0,
  cartTotalQantity: 0,
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
    setRemoveItemForCart: (state, action) => {
      const removeItem = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.cartItems = removeItem;

      localStorage.setItem("cart", JSON.stringify(state.cartItems));
      toast.success(`${action.payload.title} Remove From Cart`);
    },
    setIncreaseItemQTY: (state, action) => {
      const ItemInex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (ItemInex >= 0) {
        state.cartItems[ItemInex].cartQuantity += 1;

        toast.success(`Item QTY Increased`);
      }
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    setDecreaseItemQTY: (state, action) => {
      const ItemInex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.cartItems[ItemInex].cartQuantity > 1) {
        state.cartItems[ItemInex].cartQuantity -= 1;

        toast.success(`Item QTY Decreased`);
      }
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    // eslint-disable-next-line no-unused-vars
    setClearCartItems: (state, action) => {
      state.cartItems = [];
      toast.success(`Cart Clear`);
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    // eslint-disable-next-line no-unused-vars
    setGetTotals: (state, action) => {
      let { totalAmount, totalQTY } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const totalPrice = price * cartQuantity;

          cartTotal.totalAmount += totalPrice;
          cartTotal.totalQTY += cartQuantity;

          return cartTotal;
        },
        {
          totalAmount: 0,
          totalQTY: 0,
        }
      );

      state.cartTotalAmount = totalAmount;
      state.cartTotalQantity = totalQTY;
    },
  },
});
export const {
  setOpenCart,
  setCloseCart,
  setAddItemToCart,
  setRemoveItemForCart,
  setIncreaseItemQTY,
  setDecreaseItemQTY,
  setClearCartItems,
  setGetTotals,
} = CartSlice.actions;
export const selectScartItems = (state) => state.cart.cartItems;
export const selectScartState = (state) => state.cart.cartState;

export const selectTotalAmount = (state) => state.cart.cartTotalAmount;
export const selectTotalQTY = (state) => state.cart.cartTotalQantity;

export default CartSlice.reducer;
