export type TDevice = "desktop" | "tablet" | "mobile";

export interface IDimensions {
  width: number;
  height: number;
  device: TDevice;
}

export interface INavigation {
  isOpen: boolean;
  onOpen: (isOpen: boolean) => void;
}
