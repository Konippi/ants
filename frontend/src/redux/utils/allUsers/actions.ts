import { UserResponse } from "../../../client";

export interface ActionType {
    type: string;
    payload: UserResponse;
}

export const FETCH_ALL_USERS = "FETCH_ALL_USERS";
export const fetchAllUsersAction = (allUsers: UserResponse) => {
    return {
        type: FETCH_ALL_USERS,
        payload: allUsers
    };
};