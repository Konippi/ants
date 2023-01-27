import { Dispatch } from "redux";
import { ProjectRequestBody } from "../../../client";
import { projectApi } from "../../../client/clientWrapper";
import { StoreType } from "../../store";
import { fetchAllProjectByUserId } from "../../utils/allProjects";
import { setProjectApiStatusErrorAction } from "./actions";

export const setProjectApiStatusError = (isError: boolean) => {
    return (dispatch: Dispatch) => {
        dispatch(setProjectApiStatusErrorAction(isError));
    };
};

export const createNewProject = () => {
    return (dispatch: Dispatch<any>, getState: () => StoreType) => {
        const inputState = getState().projectInput;
        const requestBody: ProjectRequestBody = {
            name: inputState.name,
            userIdList: [parseInt(inputState.userId)]
        }
        projectApi.createProjectUsingPOST(requestBody)
            .then(() => {
                dispatch(fetchAllProjectByUserId(1));
            })
            .catch(() => {
                dispatch(setProjectApiStatusError(true));
            });
    };
};