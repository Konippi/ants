import { UserResponse } from "../../../client";
import * as Actions from "./actions";

export const initialState: UserResponse = {
    users: undefined
};

export const AllUsersReducer = (state: UserResponse = initialState, action: Actions.ActionType) => {
    switch(action.type) {
    case Actions.FETCH_ALL_USERS:
        return {
            ...action.payload
        };
    default:
        return state;
    }
};