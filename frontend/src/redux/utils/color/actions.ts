export const CHANGE_COLOR = "CHANGE_COLOR";
export const changeColorAction = (color) => {
    return {
        type: "CHANGE_COLOR",
        payload: color
    };
};