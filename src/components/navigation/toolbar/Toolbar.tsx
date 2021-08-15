import { useState } from "react";
import Hamburger from "./hamburger/Hamburger";
import styles from "./toolbar.module.scss";

export interface ToolbarProps {}

const Toolbar: React.FC<ToolbarProps> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={styles.toolbar}>
      <Hamburger isOpen={isMenuOpen} onClick={setIsMenuOpen}/>
      <h2 className={styles.title}>Sakshi Shreya</h2>
    </div>
  );
};

export default Toolbar;
