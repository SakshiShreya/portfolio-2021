import Hamburger from "./hamburger/Hamburger";
import styles from "./Toolbar.module.scss";

export interface ToolbarProps {}

const Toolbar: React.FC<ToolbarProps> = () => {
  return (
    <div className={styles.toolbar}>
      <Hamburger />
      <img src={process.env.PUBLIC_URL + "/assets/logo/SSlogo.png"} height="100" className={styles.logo} alt="Logo" />
    </div>
  );
};

export default Toolbar;
