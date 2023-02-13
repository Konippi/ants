import {
    AllProjectResponse,
    ChatMessagesResponse,
    ProjectRequestBody,
    UserInfoModel,
    UsersResponse
} from "../../client/restAPI";
import { ProjectApiStatusType } from "../project/projectApiStatus";
import { ColorType } from "../utils/color";

export interface StoreType {
    //ChatPage
    chatData: ChatMessagesResponse;

    // ProjectPage
    projectApiStatus: ProjectApiStatusType;
    projectInput: ProjectRequestBody;

    // utils
    loginUserInfo: UserInfoModel;
    allProjectsInLoginUser: AllProjectResponse;
    allUsers: UsersResponse;
    color: ColorType;
} 