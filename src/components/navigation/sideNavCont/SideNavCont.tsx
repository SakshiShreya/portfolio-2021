import { useContext } from "react";
import { NavigationContext } from "../../../context/NavigationContext";
import styles from "./SideNavCont.module.scss";

export interface SideNavContProps {}

const SideNavCont: React.FC<SideNavContProps> = props => {
  const { isOpen } = useContext(NavigationContext);

  return <div className={[styles.drawer, isOpen ? styles.show : null].join(" ")}>{props.children}</div>;
};

export default SideNavCont;
