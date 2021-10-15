import { TDevice } from "../types/genericTypes";

export const calculateDevice = (width: number): TDevice => (width >= 992 ? "desktop" : width >= 576 ? "tablet" : "mobile");

/**
 * Joins an array of string in the form `arr[0], arr[1], ..., arr[n-1] and arr[n]`
 * @param arr array of string that needs to be converted
 * @returns converted string
 */
export function convertArrayToString(arr: string[]) {
  if (arr.length === 1) {
    return arr[0];
  }

  if (arr.length === 0) {
    return "";
  }

  const temp = arr.slice(0, arr.length - 1);
  return temp.join(", ") + " and " + arr[arr.length - 1];
}

/**
 * This function takes two dates and returns the number of years between them
 * @param date1 the later date
 * @param date2 the older date
 * @returns the number of years between the two dates
 */
export function countNumberOfYears(date1: Date, date2: Date) {
  const newTime = date1.getTime();
  const oldTime = date2.getTime();
  const diff = newTime - oldTime;
  return (diff / (1000 * 60 * 60 * 24 * 365)).toFixed(1);
}
