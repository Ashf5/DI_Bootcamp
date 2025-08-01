
import { configureStore } from "@reduxjs/toolkit";
import plannerReducer from './features/planner/PlannerSlice'

export const store = configureStore({
    reducer: {
        planner: plannerReducer,
    }
})

