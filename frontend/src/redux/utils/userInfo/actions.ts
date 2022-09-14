import { UserInfoModel } from "../../../client";

export interface ActionType {
    type: string;
    payload: UserInfoModel;
}

export const FETCH_USER_INFO = "FETCH_USER_INFO";
export const fetchUserInfoAction = (payload: UserInfoModel) => {
    return {
        type: FETCH_USER_INFO,
        payload: payload
    }
};