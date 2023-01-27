import { ProjectApiStatusType } from "./types";

export interface ActionType {
    type: string;
    payload: ProjectApiStatusType;
}

export const SET_PROJECT_API_STATUS_ERROR = "SET_PROJECT_API_STATUS_ERROR";
export const setProjectApiStatusErrorAction = (isError: boolean) => {
    return {
        type: SET_PROJECT_API_STATUS_ERROR,
        payload: {
            isError: isError
        }
    };
};