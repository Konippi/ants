import { SidebarStateType } from "./type";

export interface ActionType {
    type: string;
    payload: SidebarStateType;
}

export const SET_SIDEBAR_STATE = "SET_SIDEBAR_STATE";
export const setSidebarStateAction = (payload: SidebarStateType) => {
    return {
        type: SET_SIDEBAR_STATE,
        payload: payload
    };
};