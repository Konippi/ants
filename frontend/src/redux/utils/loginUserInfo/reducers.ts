import { UserInfoModel } from "../../../client";
import * as Actions from "./actions";

export const initialState: UserInfoModel= {
    id: undefined,
    name: "",
    mail: "",
    githubUrl: ""
};

export const LoginUserInfoReducer = (state: UserInfoModel = initialState, action: Actions.ActionType) => {
    switch(action.type) {
    case Actions.FETCH_LOGIN_USER_INFO:
        return {
            ...action.payload
        };
    default: 
        return {
            ...state
        };
    }
};