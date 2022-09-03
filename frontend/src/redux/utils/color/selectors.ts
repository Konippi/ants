import { createSelector } from "reselect";
import { StoreType } from "../../store";

const colorSelector = (state: StoreType) => state.color;

export const getColor = createSelector (
    [colorSelector],
    state => state
);