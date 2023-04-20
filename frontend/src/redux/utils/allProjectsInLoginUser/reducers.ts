import { AllProjectResponse } from "../../../client/restAPI";
import * as Actions from "./actions";

export const initialState: AllProjectResponse = {
    projects: undefined
};

export const AllProjectsInLoginUserReducer = (state: AllProjectResponse = initialState, action) => {
    switch(action.type) {
    case Actions.FETCH_ALL_PROJECTS_IN_LOGIN_USER:
        return {
            ...action.payload
        };
    default:
        return state;
    }
};