import { Dispatch } from "redux";
import { userApi } from "../../../client/clientWrapper";
import { fetchUserInfoAction } from "./actions";

export const fetchUserInfoByUserId = (userId: number) => {
    return async(dispatch: Dispatch) => {
        const res = await userApi.getUserInfoByUserIdUsingGET(userId);
        dispatch(fetchUserInfoAction(res.data));
    };
};