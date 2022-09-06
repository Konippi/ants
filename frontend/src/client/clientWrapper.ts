import {
    UserControllerApi,
    ProjectControllerApi,
} from "./api";
import { Configuration } from "./configuration";

const basePath = "http://localhost:8080";
const option = {};

export const userApi = new UserControllerApi({baseOptions:option, basePath:basePath} as Configuration);
export const projectApi = new ProjectControllerApi({baseOptions:option, basePath:basePath} as Configuration);