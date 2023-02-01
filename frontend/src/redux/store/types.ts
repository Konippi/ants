import {
    AllProjectResponse,
    ProjectRequestBody,
    UserInfoModel,
    UserResponse
} from "../../client";
import { ProjectApiStatusType } from "../project/projectApiStatus";
import { ColorType } from "../utils/color";

export interface StoreType {

    // ProjectPage
    projectApiStatus: ProjectApiStatusType;
    projectInput: ProjectRequestBody;

    // utils
    userInfo: UserInfoModel;
    allProjectsInLoginUser: AllProjectResponse;
    allUsers: UserResponse;
    color: ColorType;
} 