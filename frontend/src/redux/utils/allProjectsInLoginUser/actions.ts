import { AllProjectResponse } from "../../../client";

export interface ActionType {
    type: string;
    payload: AllProjectResponse;
}

export const FETCH_ALL_PROJECTS_IN_LOGIN_USER = "FETCH_ALL_PROJECTS_IN_LOGIN_USER";
export const fetchAllProjectsInLoginUserAction = (allProjects: AllProjectResponse) => {
    return {
        type: FETCH_ALL_PROJECTS_IN_LOGIN_USER,
        payload: allProjects
    };
};