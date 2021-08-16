import NavContainer from "../navigation/navContainer/navContainer";
import styles from "./layout.module.scss";

export interface LayoutDskProps {}

const LayoutDsk: React.FC<LayoutDskProps> = () => {
  return (
    <div className={styles.main}>
      <NavContainer />
    </div>
  );
};

export default LayoutDsk;
