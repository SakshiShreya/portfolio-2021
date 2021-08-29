import NavContainer from "../navigation/navContainer/NavContainer";
import styles from "./Layout.module.scss";

export interface LayoutDskProps {}

const LayoutDsk: React.FC<LayoutDskProps> = () => {
  return (
    <div className={styles.main}>
      <NavContainer />
    </div>
  );
};

export default LayoutDsk;
