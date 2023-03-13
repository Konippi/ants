import {
    UserControllerApi,
    ProjectControllerApi,
    ChatControllerApi,
} from "./api";
import { Configuration } from "./configuration";

const basePath = "http://localhost:8080";
const option = {mode: "cors", withCredentials: true};

export const userApi = new UserControllerApi({baseOptions:option, basePath:basePath} as Configuration);
export const projectApi = new ProjectControllerApi({baseOptions:option, basePath:basePath} as Configuration);
export const chatApi = new ChatControllerApi({baseOptions:option, basePath:basePath} as Configuration);