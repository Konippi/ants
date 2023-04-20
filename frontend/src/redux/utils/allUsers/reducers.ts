import { UsersResponse } from "../../../client/restAPI";
import * as Actions from "./actions";

export const initialState: UsersResponse = {
    users: undefined
};

export const AllUsersReducer = (state: UsersResponse = initialState, action: Actions.ActionType) => {
    switch(action.type) {
    case Actions.FETCH_ALL_USERS:
        return {
            ...action.payload
        };
    default:
        return state;
    }
};