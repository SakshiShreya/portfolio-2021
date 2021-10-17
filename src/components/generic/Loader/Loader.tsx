import { FunctionComponent } from "react";
import styles from "./Loader.module.scss";

interface LoaderProps {
  size: number;
}

const Loader: FunctionComponent<LoaderProps> = props => {
  console.log(styles);
  return (
    <div className={`${styles.loader} ${styles["loader_" + props.size]}`}>
      <div className={styles.box}></div>
      <div className={styles.box}></div>
      <div className={styles.box}></div>
      <div className={styles.box}></div>
      <div className={styles.box}></div>
    </div>
  );
};

export default Loader;
