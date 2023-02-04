import { createSelector } from "reselect";
import { StoreType } from "../../store";

const loginUserInfoSelector = (state: StoreType) => state.loginUserInfo;

export const getLoginUserInfo = createSelector (
    [loginUserInfoSelector],
    state => state
);