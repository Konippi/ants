import { createSelector } from "reselect";
import { StoreType } from "../../store";

const projectInputSelector = (state: StoreType) => state.projectInput;

export const getProjectInput = createSelector (
    [projectInputSelector],
    state => state
);