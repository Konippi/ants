import { AllProjectResponse, UserInfoModel } from "../../client";
import { ProjectApiStatusType } from "../project/projectApiStatus";
import { ProjectInputType } from "../project/projectInput";
import { ColorType } from "../utils/color";

export interface StoreType {

    // ProjectPage
    projectApiStatus: ProjectApiStatusType;
    projectInput: ProjectInputType;

    // utils
    userInfo: UserInfoModel;
    allProjects: AllProjectResponse;
    color: ColorType;
} 