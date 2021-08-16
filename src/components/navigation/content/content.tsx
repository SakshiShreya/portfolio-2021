import { useContext } from "react";
import { DeviceContext } from "../../../context/deviceContext";
import { NavigationContext } from "../../../context/navigationContext";
import Routes from "../../routes";
import styles from "./content.module.scss";

export interface ContentProps {}

const Content: React.FC<ContentProps> = () => {
  const { isOpen } = useContext(NavigationContext);
  const { device } = useContext(DeviceContext);

  return (
    <div className={[styles.cont, device === "mobile" && isOpen ? styles.slide : null].join(" ")}>
      <Routes />
    </div>
  );
};

export default Content;
