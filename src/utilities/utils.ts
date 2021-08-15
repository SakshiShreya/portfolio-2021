import { TDevice } from "../types/genericTypes";

export const calculateDevice = (width: number): TDevice => (width >= 992 ? "desktop" : width >= 576 ? "tablet" : "mobile");
