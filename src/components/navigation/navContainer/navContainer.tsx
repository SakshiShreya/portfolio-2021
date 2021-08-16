import { useContext } from "react";
import { DeviceContext } from "../../../context/deviceContext";
import { NavigationContext } from "../../../context/navigationContext";
import Content from "../content/content";
import SideNavCont from "../sideNavCont/sideNavCont";
import styles from "./navContainer.module.scss";

export interface NavContainerProps {}

const NavContainer: React.FC<NavContainerProps> = () => {
  const { isOpen } = useContext(NavigationContext);
  const { device } = useContext(DeviceContext);

  return (
    <div className={styles.cont}>
      {device !== "desktop" && <div className={[styles.backdrop, isOpen ? styles.show : null].join(" ")}></div>}
      <SideNavCont />
      <Content />
    </div>
  );
};

export default NavContainer;
