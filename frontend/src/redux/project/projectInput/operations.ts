import { ChangeEvent } from "react";
import { Dispatch } from "redux";
import { StoreType } from "../../store";
import { cleanProjectInputAction, setProjectInputAction } from "./actions";

export const setProjectInput = (event: ChangeEvent<HTMLInputElement>) => {
    return (dispatch: Dispatch, getState: () => StoreType) => {
        const inputState = getState().projectInput;
        dispatch(setProjectInputAction({
            ...inputState,
            [event.target.name]: event.target.value
        }));
    };
};

export const cleanProjectInput = () => {
    return (dispatch: Dispatch) => {
        dispatch(cleanProjectInputAction());
    };
};