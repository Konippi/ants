import { AllProjectResponse } from "../../../client";
import * as Actions from "./actions";

export const initialState: AllProjectResponse = {
    projects: undefined
};

export const AllProjectsReducer = (state: AllProjectResponse = initialState, action) => {
    switch(action.type) {
    case Actions.FETCH_ALL_PROJECTS:
        return {
            ...action.payload
        };
    default:
        return state;
    }
};