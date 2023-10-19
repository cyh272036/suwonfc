import { configureStore, createSlice } from '@reduxjs/toolkit'

let cart = createSlice({
  name: 'cart',
  initialState: [],

  reducers: {
    addCount(state,action){
      let num = state.findIndex((a) => {return a.id === action.payload})
      state[num].count++
    },
    minCount(state,action){
      let num = state.findIndex((a) => a.id === action.payload);
      if (state[num].count === 1) {
        state.splice(num, 1);
      } else {
        state[num].count--;
      }
    },
    addItem(state,action){
      state.push(action.payload)
    },
    sortName(state){
      state.sort((a,b) => 
        a.name > b.name ? 1:-1 
      );
    },
    removeProduct(state, action) {
      let num = state.findIndex((a) => a.id === action.payload);
      if (num !== 1) {
        state.splice(num, 1);
      }
    }
  }
})

export const store = configureStore({
  reducer: {
    cart: cart.reducer 
  }
})

export let {addCount, addItem, sortName, minCount, removeProduct } = cart.actions