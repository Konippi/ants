import { Dispatch } from "redux";
import { projectApi } from "../../../client/clientWrapper";
import { fetchAllProjectsAction } from "./actions";

export const fetchAllProjectByUserId = (userId) => {
    return async(dispatch: Dispatch) => {
        const response = await projectApi.getAllProjectByUserIdUsingGET(userId);
        dispatch(fetchAllProjectsAction(response.data));
    };
};