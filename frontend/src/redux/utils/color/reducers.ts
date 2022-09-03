import * as Actions from "./actions";
import { ColorType } from "./types";

export const initialState: ColorType = {
    baseColor : {
        background: "#ffffff",
        color: "#000000",
    },
    mainColor : {
        background: "#D1D5DB",
        color: "#000000",
    },
};

export const ColorReducer = (state = initialState, action) => {
    switch(action.type) {
    case Actions.CHANGE_COLOR:
        return {
            ...state,
            ...action.payload
        };
    default:
        return state;
    }
};