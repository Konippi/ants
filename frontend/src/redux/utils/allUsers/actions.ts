import { UsersResponse } from "../../../client/restAPI";

export interface ActionType {
    type: string;
    payload: UsersResponse;
}

export const FETCH_ALL_USERS = "FETCH_ALL_USERS";
export const fetchAllUsersAction = (allUsers: UsersResponse) => {
    return {
        type: FETCH_ALL_USERS,
        payload: allUsers
    };
};