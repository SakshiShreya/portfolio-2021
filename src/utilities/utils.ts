import moment from "moment";
import { IDuration, TDevice } from "../types/genericTypes";

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

/**
 * This function returns the number of years, months and days between two dates
 * @param date1 the later date
 * @param date2 the older date
 * @returns the number of years, months, days between the two dates
 */
export function diffYMD(date1: moment.Moment, date2: moment.Moment) {
  let years = date1.diff(date2, "year");
  date2.add(years, "years");

  let months = date1.diff(date2, "months");
  date2.add(months, "months");

  let days = date1.diff(date2, "days");
  date2.add(days, "days");

  return { years, months, days };
}

/**
 * This function takes years, months, days and returns stringified duration in a form like this:
 * `3 yrs 2 mos`, `1 yr 2 days`, `2 yrs 1mo`, `0 days`
 * That means, at a time, max 2 things are shown
 * @param param0 duration
 * @returns stringified duration
 */
export function stringifyDuration({ years, months, days }: IDuration) {
  let result = "";

  if (years) {
    result += years + " yr";

    if (years > 1) {
      result += "s";
    }

    if (months || days) {
      result += " ";
    }
  }

  if (months) {
    result += months + " mo";

    if (months > 1) {
      result += "s";
    }

    // if year is not present, then only we have to show days
    if (days && !years) {
      result += " ";
    }
  }

  // show days if either years or months is not present
  if (days && (!years || !months)) {
    result += days + " day";

    if (days > 1) {
      result += "s";
    }
  }

  if (!result) {
    result = "0 days";
  }

  return result;
}
