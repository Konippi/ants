import { createSelector } from "reselect";
import { StoreType } from "../../store";

const projectApiStatusSelector = (state: StoreType) => state.projectApiStatus;

export const getProjectApiStatus = createSelector (
    [projectApiStatusSelector],
    state => state
);