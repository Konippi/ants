import { createSelector } from "reselect";
import { StoreType } from "../../store";

const SampleSelector = (state: StoreType) => state.sample;

export const getSample = createSelector(
    [SampleSelector],
    state => state.isTrue
);