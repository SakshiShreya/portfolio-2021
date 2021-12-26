import { IDuration } from "./genericTypes";

export interface IAboutSection {
  position: string;
  company: string;
  location: string;
  prevCompanies: Array<string>;
}

export interface IExperienceRaw {
  _id: string;
  company: string;
  logo?: string;
  desc: Array<string>;
  tech: Array<string>;
  designation: string;
  start: string;
  end?: string;
  order: number;
}

export interface IExperience {
  _id: string;
  company: string;
  logo?: string;
  duration: IDuration;
  group: Array<{
    _id: string;
    designationAndDates: Array<{ _id: string, designation: string; start: string; end?: string }>;
    desc: Array<string>;
    tech: Array<string>;
  }>;
}
