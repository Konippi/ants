import { AllProjectResponse } from "../../../client";

export interface AllProjectsType extends AllProjectResponse {
    isLoading: boolean;
    isError: boolean;
}