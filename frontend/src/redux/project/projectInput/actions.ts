import { ProjectInputType } from "./types";

export interface ActionType {
    type: string;
    payload: ProjectInputType;
}

export const SET_PROJECT_INPUT = "SET_PROJECT_INPUT";
export const setProjectInputAction = (payload: ProjectInputType) => {
    return {
        type: SET_PROJECT_INPUT,
        payload: payload
    };
};

export const CLEAN_PROJECT_INPUT = "CLEAN_PROJECT_INPUT";
export const cleanProjectInputAction = () => {
    return {
        type: CLEAN_PROJECT_INPUT
    };
};