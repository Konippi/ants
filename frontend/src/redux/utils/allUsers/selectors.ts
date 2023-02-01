import { createSelector } from "reselect";
import { StoreType } from "../../store";

const allUsersSelector = (state: StoreType) => state.allUsers;

export const getAllUsers = createSelector (
    [allUsersSelector],
    state => state
);