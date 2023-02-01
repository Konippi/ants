import { Dispatch } from "redux";
import { projectApi } from "../../../client/clientWrapper";
import { fetchAllProjectsInLoginUserAction } from "./actions";

export const fetchAllProjectsInLoginUser = () => {
    return async(dispatch: Dispatch) => {
        const response = await projectApi.getAllProjectsInLoginUserUsingGET();
        dispatch(fetchAllProjectsInLoginUserAction(response.data));
    };
};