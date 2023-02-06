import { SidebarStateType } from "./type";
import * as Actions from "./actions";

export const initialState: SidebarStateType = {
    isOpen: true
};

export const SideBarStateReducer = (state: SidebarStateType = initialState, action: Actions.ActionType) => {
    switch(action.type) {
    case Actions.SET_SIDEBAR_STATE:
        return {
            ...action.payload
        };
    default:
        return state;
    }
};