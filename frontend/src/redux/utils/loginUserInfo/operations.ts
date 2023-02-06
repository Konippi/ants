import { Dispatch } from "redux";
import { userApi } from "../../../client/clientWrapper";
import { fetchLoginUserInfoAction } from "./actions";

export const fetchLoginUserInfo = () => {
    return async(dispatch: Dispatch) => {
        const res = await userApi.getLoginUserUsingGET();
        dispatch(fetchLoginUserInfoAction(res.data));
    };
};