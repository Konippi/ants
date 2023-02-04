import { UserInfoModel } from "../../../client";

export interface ActionType {
    type: string;
    payload: UserInfoModel;
}

export const FETCH_LOGIN_USER_INFO = "FETCH_LOGIN_USER_INFO";
export const fetchLoginUserInfoAction = (payload: UserInfoModel) => {
    return {
        type: FETCH_LOGIN_USER_INFO,
        payload: payload
    };
};