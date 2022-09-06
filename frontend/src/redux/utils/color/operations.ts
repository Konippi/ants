import { Dispatch } from "redux";
import { changeColorAction } from "./actions";

export const returnColor = () => {
    return (dispatch: Dispatch) => {
        dispatch(changeColorAction({
            baseColor : {
                background: "#ffffff",
                color: "#000000",
            },
            mainColor : {
                background: "#D1D5DB",
                color: "#000000",
            },
        }));
    };
};

export const changeColor = () => {
    return (dispatch: Dispatch) => {
        dispatch(changeColorAction({
            baseColor : {
                background: "#000000",
                color: "#ffffff",
            },
            mainColor : {
                background: "#2f4f4f",
                color: "#ffffff",
            },
        }));
    };
};