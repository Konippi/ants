import { createSelector } from "reselect";
import { StoreType } from "../../store";

const allProjectsInLoginUserSelector = (state: StoreType) => state.allProjectsInLoginUser;

export const getAllProjectsInLoginUser = createSelector (
    [allProjectsInLoginUserSelector],
    state => state
);