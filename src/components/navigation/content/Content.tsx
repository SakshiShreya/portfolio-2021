import { useContext } from "react";
import { DeviceContext } from "../../../context/DeviceContext";
import { NavigationContext } from "../../../context/NavigationContext";
import Routes from "../../Routes";
import styles from "./Content.module.scss";

export interface ContentProps {}

const Content: React.FC<ContentProps> = () => {
  const { isOpen } = useContext(NavigationContext);
  const { device } = useContext(DeviceContext);

  return (
    <div id="content" className={[styles.cont, device === "desktop" || isOpen ? styles.slide : null].join(" ")}>
      <Routes />
    </div>
  );
};

export default Content;
