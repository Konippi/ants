import * as Actions from "./actions";
import { AllProjectsType } from "./types";

export const initialState: AllProjectsType = {
    isLoading: false,
    isError: false,
};

export const AllProjectsReducer = (state = initialState, action) => {
    switch(action.type) {
    case Actions.FETCH_ALL_PROJECTS:
        return {
            ...action.payload
        };
    default:
        return state;
    }
};