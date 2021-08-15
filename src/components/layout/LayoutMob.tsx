import Toolbar from "../navigation/toolbar/Toolbar";
import styles from "./layout.module.scss";

export interface LayoutMobProps {
  
}
 
const LayoutMob: React.FC<LayoutMobProps> = () => {
  return ( <div className={styles.main}>
    <Toolbar />
  </div> );
}
 
export default LayoutMob;