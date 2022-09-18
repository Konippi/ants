import { createSelector } from "reselect";
import { StoreType } from "../../store";

const userInfoSelector = (state: StoreType) => state.userInfo;

export const getUserInfo = createSelector (
    [userInfoSelector],
    state => state
);