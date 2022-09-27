import { ColorType } from "./types";

export interface ActionType {
    type: string;
    payload: ColorType;
}

export const CHANGE_COLOR = "CHANGE_COLOR";
export const changeColorAction = (color: ColorType) => {
    return {
        type: CHANGE_COLOR,
        payload: color
    };
};