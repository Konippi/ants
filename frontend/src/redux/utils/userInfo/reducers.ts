import { UserInfoModel } from "../../../client";
import * as Actions from "./actions";

export const initialState: UserInfoModel= {
    mail: "",
    githubName: "",
    country: ""
};

export const UserInfoReducer = (state: UserInfoModel = initialState, action: Actions.ActionType) => {
    switch(action.type) {
        case Actions.FETCH_USER_INFO:
            return {
                ...action.payload
            };
        default: 
            return {
                ...state
            };
    }
}