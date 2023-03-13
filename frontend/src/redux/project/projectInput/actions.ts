import { ProjectRequestBody } from "../../../client/restAPI";

export interface ActionType {
    type: string;
    payload: ProjectRequestBody;
}

export const SET_PROJECT_INPUT = "SET_PROJECT_INPUT";
export const setProjectInputAction = (payload: ProjectRequestBody) => {
    return {
        type: SET_PROJECT_INPUT,
        payload: payload
    };
};