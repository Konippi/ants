import { StoreType } from "../../store";
import { createSelector } from "reselect";

const sidebarStateSelector = (state: StoreType) => state.sidebarState;

export const getSidebarState = createSelector(
    [sidebarStateSelector],
    state => state
);