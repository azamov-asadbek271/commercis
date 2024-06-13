import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  cartItem: [],
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    ItemNull: (state) =>{
        state.value = 0
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    addItem: (state, { payload }) => {
      const { product } = payload;
      const item = state.cartItem.find((i) => (i.image = product.image));

      if (item) {
        item.summa += product.sum;
      } else {
        state.cartItem.push(product);
      }

      localStorage.setItem("cart", JSON.stringify(state));
    },
    // editItem:(state,{payload}) => {
    //     const { product } = payload;
    //   const item = state.cartItem.find((i) => (i.image = product.image));
    //   if(item) {
    //     item.summa -= product.sum
    //   }
    // },
    removeItem: (state, { payload }) => {
      const { image } = payload;
      const product = state.cartItem.find((i) => i.image === image);
      state.cartItem = state.cartItem.filter((i) => i.image !== image);

      state.summa -= product.sum;
    },
  },
});

export const { increment, decrement, incrementByAmount,addItem,removeItem,ItemNull,editItem } = counterSlice.actions;

export default counterSlice.reducer;
