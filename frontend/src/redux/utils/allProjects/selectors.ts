import { createSelector } from "reselect";
import { StoreType } from "../../store";

const allProjectSelector = (state: StoreType) => state.allProjects;

export const getAllProjects = createSelector (
    [allProjectSelector],
    state => state
);