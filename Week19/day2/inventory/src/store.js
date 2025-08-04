
import {configureStore} from '@reduxjs/toolkit';
import inventorySlice from './features/inventory/InventorySlice'

let store = configureStore({
    reducer: {
        inventory: inventorySlice
    }
})
export default store;