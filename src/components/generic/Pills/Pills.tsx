import * as React from "react";
import styles from "./Pills.module.scss";

interface PillsProps {
  list: Array<IPill>;
  color?: "primary" | "secondary" | "gray"; // Primary by default
}

export interface IPill {
  display: string;
  id: string;
}

const Pills: React.FunctionComponent<PillsProps> = ({ list, color = "primary" }) => {
  return (
    <ul>
      {list.map(pill => (
        <li key={pill.id} className={`${styles.pill} ${styles[color]}`}>
          {pill.display}
        </li>
      ))}
    </ul>
  );
};

export default Pills;
