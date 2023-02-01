import { Dispatch } from "redux";
import { projectApi } from "../../../client/clientWrapper";
import { StoreType } from "../../store";
import { setProjectApiStatusErrorAction } from "./actions";

export const setProjectApiStatusError = (isError: boolean) => {
    return (dispatch: Dispatch) => {
        dispatch(setProjectApiStatusErrorAction(isError));
    };
};

export const createNewProjectAPI = () => {
    return (dispatch: Dispatch<any>, getState: () => StoreType) => {
        const inputState = getState().projectInput;
        projectApi.createProjectUsingPOST(inputState)
            .then(() => {
                location.reload();
            })
            .catch(() => {
                alert("処理が正常に行われませんでした");
                dispatch(setProjectApiStatusError(true));
            });
    };
};

export const editProjectAPI = (projectId: number) => {
    return (dispatch: Dispatch<any>, getState: () => StoreType) => {
        const inputState = getState().projectInput;
        projectApi.editProjectUsingPUT(projectId, inputState)
            .then(() => {
                location.reload();
            })
            .catch(() => {
                alert("処理が正常に行われませんでした");
                dispatch(setProjectApiStatusError(true));
            });
    };
};

export const deleteProjectAPI = (projectId: number) => {
    return (dispatch: Dispatch<any>) => {
        projectApi.deleteProjectUsingDELETE(projectId)
            .then(() => {
                location.reload();
            })
            .catch(() => {
                alert("処理が正常に行われませんでした");
                dispatch(setProjectApiStatusError(true));
            });
    };
};