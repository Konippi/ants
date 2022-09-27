import * as Actions from "./actions";
import { ProjectApiStatusType } from "./types";

export const initialState: ProjectApiStatusType = {
    isError: false
};

export const ProjectApiStatusReducer = (state: ProjectApiStatusType = initialState, action: Actions.ActionType) => {
    switch(action.type) {
    case Actions.SET_PROJECT_API_STATUS_ERROR:
        return {
            ...action.payload
        };
    default:
        return state;
    }
};