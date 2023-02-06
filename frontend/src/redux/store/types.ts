import {
    AllProjectResponse,
    ProjectRequestBody,
    UserInfoModel,
    UsersResponse
} from "../../client";
import { ProjectApiStatusType } from "../project/projectApiStatus";
import { ColorType } from "../utils/color";
import { SidebarStateType } from "../task/taskSidebar";

export interface StoreType {

    // ProjectPage
    projectApiStatus: ProjectApiStatusType;
    projectInput: ProjectRequestBody;

    // TaskPage
    sidebarState: SidebarStateType;

    // utils
    loginUserInfo: UserInfoModel;
    allProjectsInLoginUser: AllProjectResponse;
    allUsers: UsersResponse;
    color: ColorType;
} 