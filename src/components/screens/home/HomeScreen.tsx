import { Link } from "react-router-dom";
import Name from "../../generic/Name/Name";
import styles from "./HomeScreen.module.scss";

export interface HomeScreenProps {}

const HomeScreen: React.FC<HomeScreenProps> = () => {
  return (
    <div className={styles.cont}>
      <div>
        <p className={"h1 " + styles.head}>Hello World... </p>
        <h2 className={["h1", styles.head, styles.name].join(" ")}>
          I am <Name />,
        </h2>
        <p className={"h1 " + styles.head}>Web Developer</p>
        <p className={"h2"}>and Mentor.</p>

        <p className={styles.psText}>
          I can develop responsive and pixel-perfect websites. I love what I do. I can mentor you to be the same.
        </p>
        <Link to="contact" className={"btn secondary small border " + styles.help}>
          How can I help you?
        </Link>
      </div>
    </div>
  );
};

export default HomeScreen;
