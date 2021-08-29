import NavContainer from "../navigation/navContainer/NavContainer";
import Toolbar from "../navigation/toolbar/Toolbar";
import styles from "./Layout.module.scss";

export interface LayoutMobProps {}

const LayoutMob: React.FC<LayoutMobProps> = () => {
  return (
    <div className={styles.main}>
      <Toolbar />
      <NavContainer />
    </div>
  );
};

export default LayoutMob;
