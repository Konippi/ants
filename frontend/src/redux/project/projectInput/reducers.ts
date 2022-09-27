import * as Actions from "./actions";
import { ProjectInputType } from "./types";

export const initialState: ProjectInputType = {
    name: "",
    userId: "",
};

export const ProjectInputReducer = (state: ProjectInputType = initialState, action: Actions.ActionType) => {
    switch(action.type) {
    case Actions.SET_PROJECT_INPUT:
        return {
            ...action.payload
        };
    case Actions.CLEAN_PROJECT_INPUT:
        return {
            ...initialState
        };
    default:
        return state;
    }
};