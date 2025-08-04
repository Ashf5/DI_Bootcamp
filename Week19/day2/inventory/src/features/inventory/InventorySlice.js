
import {createSlice} from '@reduxjs/toolkit';

const inventorySlice = createSlice({
    name: 'inventory',
    initialState: {},
    reducers: {
        addProduct: (state, action) => {
            state[action.payload.product] = {id: Date.now(),quantity: action.payload.quantity};
        },
        updateQuantity: (state, action) => {
            state[action.payload.product].quantity = action.payload.quantity;
        },
        removeProduct: (state, action) => {
            delete state[action.payload.product]
        }
    }

})

export default inventorySlice.reducer;
export const {addProduct, updateQuantity, removeProduct} = inventorySlice.actions;
