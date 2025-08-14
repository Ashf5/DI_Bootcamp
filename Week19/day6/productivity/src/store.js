import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from './features/categories/categorySlice';
import taskReducer from './features/tasks/taskSlice';


export const store = configureStore({
    reducer: {
        tasks: taskReducer,
        categories: categoryReducer
    }
})