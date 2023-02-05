import { ProjectRequestBody } from "../../../client/restAPI";
import * as Actions from "./actions";

export const initialState: ProjectRequestBody = {
    name: "",
    description: "",
    userIdList: [],
};

export const ProjectInputReducer = (state: ProjectRequestBody = initialState, action: Actions.ActionType) => {
    switch(action.type) {
    case Actions.SET_PROJECT_INPUT:
        return {
            ...action.payload
        };
    default:
        return state;
    }
};