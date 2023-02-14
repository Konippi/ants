/**
 * 年月日を取得する
 * @param dateTime yyyy-MM-ddThh:mm:ss
 * @returns yyyy/MM/dd
 */
export const getDate = (dateTime?: string) => {
    return dateTime?.split("T")[0]?.replaceAll("-", "/");
};

/**
 * 時間を取得する
 * @param dateTime yyyy-MM-ddTmm:ss:ff
 * @returns hh:mm
 */
export const getTime = (dateTime?: string) => {
    const time = new Date(dateTime as string);
    return time.getHours() + ":" + time.getMinutes().toString().padStart(2, "0");
};

/**
 * 同じ日付であるかを判定する
 * @param dateTime1 yyyy-MM-ddTmm:ss:ff
 * @param dateTime2 yyyy-MM-ddTmm:ss:ff
 */
export const isSameDate = (dateTime1?: string, dateTime2?: string) => {
    console.log(new Date(dateTime2 as string));
    if (dateTime1 === undefined || dateTime2 === undefined) {
        return false;
    }
    return getDate(dateTime1) === getDate(dateTime2);
};
