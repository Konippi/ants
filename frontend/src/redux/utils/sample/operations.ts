import { Dispatch } from "redux";
import { StoreType } from "../../store";
import { changeSampleAction } from "./actions";

export const changeSample = () => {
    return (dispatch: Dispatch, getState: ()=>StoreType) => {
        const sample = getState().sample;
        dispatch(changeSampleAction(!sample.isTrue));
    };
};