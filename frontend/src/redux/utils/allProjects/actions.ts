import { AllProjectResponse } from "../../../client";

export const FETCH_ALL_PROJECTS = "FETCH_ALL_PROJECTS";
export const fetchAllProjectsAction = (allProjects: AllProjectResponse) => {
    return {
        type: "FETCH_ALL_PROJECTS",
        payload: allProjects
    };
};