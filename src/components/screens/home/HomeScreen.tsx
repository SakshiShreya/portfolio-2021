import styles from "./HomeScreen.module.scss";

export interface HomeScreenProps {}

const HomeScreen: React.FC<HomeScreenProps> = () => {
  return (
    <div className={styles.cont}>
      <div>
        <p className={"h1 " + styles.head}>Hi!</p>
        <h2 className={"h1 " + styles.head}>
          I am{" "}
          <span className={styles.name}>
            <span>
              <img src="assets/logo/SSlogo.png" className={styles.initials} />
            </span>
            akshi,
          </span>
        </h2>
        <p className={"h1 " + styles.head}>Web Developer.</p>
      </div>
    </div>
  );
};

export default HomeScreen;
