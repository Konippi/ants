import { ChangeEvent } from "react";
import { MultiValue } from "react-select";
import { Dispatch } from "redux";
import { ProjectWithUsers } from "../../../client/restAPI";
import { MultiSelectType } from "../../../type/multiSelectType";
import { StoreType } from "../../store";
import { setProjectInputAction } from "./actions";
import { initialState } from "./reducers";

export const setProjectInput = (project: ProjectWithUsers) => {
    return (dispatch: Dispatch) => {
        dispatch(setProjectInputAction({
            name: project.project?.name,
            description: project.project?.description,
            userIdList: project.users?.map(user => user.userId as number)
        }));
    };
};

export const changeProjectInput = (event: ChangeEvent<HTMLInputElement>) => {
    return (dispatch: Dispatch, getState: () => StoreType) => {
        const inputState = getState().projectInput;
        dispatch(setProjectInputAction({
            ...inputState,
            [event.target.name]: event.target.value
        }));
    };
};

export const changeProjectSelect = (event: MultiValue<MultiSelectType>) => {
    return (dispatch: Dispatch, getState: () => StoreType) => {
        const inputState = getState().projectInput;
        dispatch(setProjectInputAction({
            ...inputState,
            userIdList: event.map(e => e.value as number)
        }));
    };
};

export const cleanProjectInput = () => {
    return (dispatch: Dispatch, getState: () => StoreType) => {
        const loginUserId = getState().loginUserInfo.id as number;
        dispatch(setProjectInputAction({
            ...initialState,
            userIdList: [loginUserId]
        }));
    };
};