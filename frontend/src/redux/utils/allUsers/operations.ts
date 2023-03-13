import { Dispatch } from "redux";
import { userApi } from "../../../client/restAPI/clientWrapper";
import { fetchAllUsersAction } from "./actions";

export const fetchAllUsers = () => {
    return async(dispatch: Dispatch) => {
        const response = await userApi.getAllUsersUsingGET();
        dispatch(fetchAllUsersAction(response.data));
    };
};