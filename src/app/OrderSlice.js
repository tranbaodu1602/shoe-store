import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  FromOtherState: false,
};

const OtherSlice = createSlice({
  initialState,
  name: "other",
  reducers: {
    setOpenFromOther: (state, action) => {
      state.FromOtherState = action.payload.FromOtherState;
    },

    setCloseFromOther: (state, action) => {
      state.FromOtherState = action.payload.FromOtherState;
    },
  },
});
export const { setOpenFromOther, setCloseFromOther } = OtherSlice.actions;
export const selectOtherState = (state) => state.other.FromOtherState;
export default OtherSlice.reducer;
