import { createContext } from "react";
import { IDimensions } from "../types/genericTypes";
import { calculateDevice } from "../utilities/utils";

const { innerWidth: width, innerHeight: height } = window;
export const DeviceContext = createContext<IDimensions>({ width, height, device: calculateDevice(width) });
