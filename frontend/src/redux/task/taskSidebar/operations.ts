import { Dispatch } from "redux";
import { setSidebarStateAction } from "./actions";

export const setSidebarState = (isOpen: boolean) => {
    return (dispatch: Dispatch) => {
        dispatch(setSidebarStateAction({
            isOpen: isOpen
        }));
    };
};
