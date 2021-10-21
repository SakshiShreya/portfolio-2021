import React from "react";
import styles from "./Name.module.scss";

interface NameProps {}

const Name: React.FunctionComponent<NameProps> = () => {
  return (
    <>
      <span className={styles.green}>S</span>akshi <span className={styles.orange}>S</span>hreya
    </>
  );
};

export default Name;
