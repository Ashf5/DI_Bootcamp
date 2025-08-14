
import { createSelector } from "@reduxjs/toolkit";


const baseSelector = (state) => state.tasks;

/*
export const selectTasksByCategoryId = (categoryId) => {
    return createSelector(
    [baseSelector],
    (tasks) => tasks.filter(task => task.categoryId === categoryId)
    )
}
    */

export const selectTasksByCategoryId = (id) => (state) => state.tasks.filter(task => task.id === id);

export const selectNotCompletedTasks = createSelector(
    [baseSelector],
    (tasks) => tasks.filter(tasks.completed === false)
)