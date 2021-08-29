import { createContext } from "react";
import { INavigation } from "../types/genericTypes";

export const NavigationContext = createContext<INavigation>({ isOpen: false, onOpen: () => {} });
