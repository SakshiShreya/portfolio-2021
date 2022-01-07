import moment from "moment";
import { calculateDevice, convertArrayToString, countNumberOfYears, diffYMD, stringifyDuration } from "./utils";

describe("test calculateDevice function", () => {
  test("should return desktop for 1000 with", () => {
    expect(calculateDevice(1000)).toEqual("desktop");
  });

  test("should return desktop for 992 width", () => {
    expect(calculateDevice(992)).toEqual("desktop");
  });

  test("should return tablet for 991 width", () => {
    expect(calculateDevice(991)).toEqual("tablet");
  });

  test("should return tablet for 576 width", () => {
    expect(calculateDevice(576)).toEqual("tablet");
  });

  test("should return mobile for 575 width", () => {
    expect(calculateDevice(575)).toEqual("mobile");
  });

  test("should return mobile for 400 width", () => {
    expect(calculateDevice(400)).toEqual("mobile");
  });
});

describe("test convertArrayToString function", () => {
  test("should return empty string for empty array", () => {
    expect(convertArrayToString([])).toEqual("");
  });

  test("should return string in the array for single element array", () => {
    expect(convertArrayToString(["first"])).toEqual("first");
  });

  test("should return formatted string for multiple element array", () => {
    expect(convertArrayToString(["first", "second", "third"])).toEqual("first, second and third");
  });
});

describe("test countNumberOfYears function", () => {
  test("should return 1 year between 1 Jan 2020 and 1 Jan 2021", () => {
    expect(countNumberOfYears(new Date("1 Jan 2021"), new Date("1 Jan 2020"))).toEqual("1.0");
  });

  test("should return 2 year between 2 Jan 2020 and 2 Apr 2021", () => {
    expect(countNumberOfYears(new Date("8 Apr 2021"), new Date("2 Jan 2020"))).toEqual("1.3");
  });
});

describe("test diffYMD function", () => {
  test("should return number of days, months and years between two dates", () => {
    const diff = diffYMD(moment(new Date("2 Feb 2021")), moment(new Date("1 Jan 2020")));
    expect(diff.days).toEqual(1);
    expect(diff.months).toEqual(1);
    expect(diff.years).toEqual(1);
  });

  test("days and month should be 0 for 1 year difference", () => {
    const diff = diffYMD(moment(new Date("1 Jan 2021")), moment(new Date("1 Jan 2020")));
    expect(diff.days).toEqual(0);
    expect(diff.months).toEqual(0);
    expect(diff.years).toEqual(1);
  });

  test("days and years should be 0 for 1 month difference", () => {
    const diff = diffYMD(moment(new Date("1 Feb 2021")), moment(new Date("1 Jan 2021")));
    expect(diff.days).toEqual(0);
    expect(diff.months).toEqual(1);
    expect(diff.years).toEqual(0);
  });

  test("month and years should be 0 for 1 day difference", () => {
    const diff = diffYMD(moment(new Date("2 Jan 2021")), moment(new Date("1 Jan 2021")));
    expect(diff.days).toEqual(1);
    expect(diff.months).toEqual(0);
    expect(diff.years).toEqual(0);
  });
});

describe("test stringifyDuration function", () => {
  test("'day' in returned value should be singular for 1 day", () => {
    const first = { years: 0, months: 0, days: 1 };
    expect(stringifyDuration(first)).not.toContain("days");
    expect(stringifyDuration(first)).toContain("day");

    const second = { years: 4, months: 0, days: 1};
    expect(stringifyDuration(second)).not.toContain("days");
    expect(stringifyDuration(second)).toContain("day");
  });

  test("'days' in returned value should be plural for more than 1 days", () => {
    const first = { years: 0, months: 0, days: 3 };
    expect(stringifyDuration(first)).toContain("days");

    const second = { years: 4, months: 0, days: 7};
    expect(stringifyDuration(second)).toContain("days");
  });

  test("'mo' in returned value should be singular for 1 month", () => {
    const first = { years: 0, months: 1, days: 0 };
    expect(stringifyDuration(first)).not.toContain("mos");
    expect(stringifyDuration(first)).toContain("mo");

    const second = { years: 4, months: 1, days: 7};
    expect(stringifyDuration(second)).not.toContain("mos");
    expect(stringifyDuration(second)).toContain("mo");
  });

  test("'mos' in returned value should be plural for more than 1 months", () => {
    const first = { years: 0, months: 4, days: 0 };
    expect(stringifyDuration(first)).toContain("mos");

    const second = { years: 4, months: 2, days: 3};
    expect(stringifyDuration(second)).toContain("mos");
  });

  test("'yr' in returned value should be singular for 1 year", () => {
    const first = { years: 1, months: 0, days: 0 };
    expect(stringifyDuration(first)).not.toContain("yrs");
    expect(stringifyDuration(first)).toContain("yr");

    const second = { years: 1, months: 1, days: 7};
    expect(stringifyDuration(second)).not.toContain("yrs");
    expect(stringifyDuration(second)).toContain("yr");
  });

  test("'yrs' in returned value should be plural for more than 1 years", () => {
    const first = { years: 7, months: 0, days: 0 };
    expect(stringifyDuration(first)).toContain("yrs");

    const second = { years: 4, months: 2, days: 3};
    expect(stringifyDuration(second)).toContain("yrs");
  });

  test("if years is 0, then months and days should be returned", () => {
    const dur = stringifyDuration({ years: 0, months: 3, days: 4 });
    expect(dur).not.toContain("yr");
    expect(dur).toContain("mos");
    expect(dur).toContain("days");
  })

  test("if months is 0, then years and days should be returned", () => {
    const dur = stringifyDuration({ years: 2, months: 0, days: 4 });
    expect(dur).not.toContain("mo");
    expect(dur).toContain("yrs");
    expect(dur).toContain("days");
  })

  test("if dayss is 0, then years and months should be returned", () => {
    const dur = stringifyDuration({ years: 2, months: 3, days: 0 });
    expect(dur).not.toContain("day");
    expect(dur).toContain("yrs");
    expect(dur).toContain("mos");
  })

  test("should return only 2 things even if all three are possible between two dates", () => {
    const dur = stringifyDuration({ years: 2, months: 3, days: 4 });
    expect(dur).not.toContain("day");
    expect(dur).toContain("yrs");
    expect(dur).toContain("mos");
  });
});
