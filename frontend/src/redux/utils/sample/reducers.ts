import { Action } from "redux";
import * as Actions from "./actions";
import { SampleType } from "./types";

export const initialState: SampleType = {
    isTrue: false
};

export const SampleReducer = (state = initialState, action) => {
    switch(action.type) {
    case Actions.CHANGE_SAMPLE:
        return {
            isTrue: action.payload
        };
    default:
        return state;
    }
};