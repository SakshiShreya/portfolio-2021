import Hamburger from "./hamburger/Hamburger";
import styles from "./toolbar.module.scss";

export interface ToolbarProps {}

const Toolbar: React.FC<ToolbarProps> = () => {
  return (
    <div className={styles.toolbar}>
      <Hamburger />
      <h2 className={styles.title}>Sakshi Shreya</h2>
    </div>
  );
};

export default Toolbar;
