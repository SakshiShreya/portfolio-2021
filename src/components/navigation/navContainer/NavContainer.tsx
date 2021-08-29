import { useContext } from "react";
import { DeviceContext } from "../../../context/DeviceContext";
import { NavigationContext } from "../../../context/NavigationContext";
import Content from "../content/Content";
import SideNavCont from "../sideNavCont/SideNavCont";
import styles from "./NavContainer.module.scss";

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
