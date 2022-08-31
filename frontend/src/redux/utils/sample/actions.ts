export const CHANGE_SAMPLE = "CHANGE_SAMPLE";
export const changeSampleAction = (isTrue) => {
    return {
        type: "CHANGE_SAMPLE",
        payload: isTrue
    };
};