import { configureStore, createSlice } from '@reduxjs/toolkit'

let cart = createSlice({
  name: 'cart',
  initialState: [],

  reducers: {
    addCount(state,action){
      let num = state.findIndex((a) => {return a.id === action.payload})
      
      state[num].count++
      state[num].price += state[num].basicprice
    },
    minCount(state,action){
      let num = state.findIndex((a) => a.id === action.payload);
      if (state[num].count === 1) {
        state.splice(num, 1);
      } else {
        state[num].count--;
        state[num].price -= state[num].basicprice
      }
    },
    addItem(state,action){
      const newItem = action.payload;
      const existingItem = state.find(item => item.id === newItem.id && item.size === newItem.size && item.number === newItem.number);

      if (existingItem) {
        console.log(existingItem.count, newItem.count)
        existingItem.price += parseInt(newItem.price)
        existingItem.count += parseInt(newItem.count);
      } else {
        state.push(newItem);
      }
    },
    sortName(state){
      state.sort((a,b) => 
        a.price > b.price ? 1:-1 
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