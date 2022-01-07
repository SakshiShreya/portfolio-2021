import React from "react";
import styles from "./Name.module.scss";

interface NameProps {}

const Name: React.FunctionComponent<NameProps> = () => {
  return (
    <>
      <span data-testid="green" className={styles.green}>
        S
      </span>
      akshi{" "}
      <span data-testid="orange" className={styles.orange}>
        S
      </span>
      hreya
    </>
  );
};

export default Name;
