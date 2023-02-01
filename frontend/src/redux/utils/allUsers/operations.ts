import { Dispatch } from "redux";
import { userApi } from "../../../client/clientWrapper";
import { fetchAllUsersAction } from "./actions";

export const fetchAllUsers = () => {
    return async(dispatch: Dispatch) => {
        const response = await userApi.getAllUsersUsingGET();
        dispatch(fetchAllUsersAction(response.data));
    };
};