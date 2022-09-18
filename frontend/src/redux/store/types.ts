import { UserInfoModel } from "../../client";
import { AllProjectsType } from "../utils/allProjects";
import { ColorType } from "../utils/color";
import { SampleType } from "../utils/sample";

export interface StoreType {
    userInfo: UserInfoModel;
    allProjects: AllProjectsType;
    color: ColorType;
    sample: SampleType;
} 