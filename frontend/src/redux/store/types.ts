import {
    AllProjectResponse,
    ProjectRequestBody,
    UserInfoModel,
    UsersResponse
} from "../../client";
import { ProjectApiStatusType } from "../project/projectApiStatus";
import { ColorType } from "../utils/color";

export interface StoreType {

    // ProjectPage
    projectApiStatus: ProjectApiStatusType;
    projectInput: ProjectRequestBody;

    // utils
    loginUserInfo: UserInfoModel;
    allProjectsInLoginUser: AllProjectResponse;
    allUsers: UsersResponse;
    color: ColorType;
} 