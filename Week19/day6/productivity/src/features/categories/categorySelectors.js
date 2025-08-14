
import { createSelector } from "@reduxjs/toolkit";

const baseSelector = (state) => state.categories;

export const selectCategoryById = (catId)=> createSelector(
    [baseSelector],
    (categories) => categories.find(cat => cat.id === catId)
);

