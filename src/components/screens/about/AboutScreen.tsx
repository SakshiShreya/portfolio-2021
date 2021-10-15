import * as React from "react";
import { IAboutSection } from "../../../types/portfolioSectionTypes";
import { convertArrayToString, countNumberOfYears } from "../../../utilities/utils";
import Name from "../../generic/Name/Name";
import styles from "./AboutScreen.module.scss";
import axios from "../../../utilities/axios";

interface AboutScreenProps {}

const AboutScreen: React.FunctionComponent<AboutScreenProps> = () => {
  const [data, setData] = React.useState<IAboutSection>({ position: "", company: "", location: "", prevCompanies: [] });

  const yearsExp = countNumberOfYears(new Date(), new Date("11/26/2018"));

  React.useEffect(() => {
    axios
      .get<IAboutSection>("/about")
      .then(res => {
        setData(res.data);
      })
      .catch((err: Error) => {
        console.log(err);
      });
  }, []);

  return (
    <article className={styles.cont}>
      <h1 className={styles.heading}>
        <Name />
      </h1>
      {/* TODO: Get data from backend and bind here */}
      <p className={styles.para}>
        I am a {data.position} in {data.company}. I am located in {data.location}. I have around {yearsExp}yrs of professional experience. I
        love learning and trying new things. And after learning, I love to share my knowledge with the world; mentoring people is one of the
        things that I do in my spare time.
      </p>
      <img src={process.env.PUBLIC_URL + "/assets/images/me.png"} className={styles.headshot} alt="Sakshi's Headshot" />

      <h2 className={styles.subHead}>Previous Experience</h2>
      <p className={styles.para}>
        Before {data.company}, I have worked in {convertArrayToString(data.prevCompanies)}. I have gained lots of technical and
        non-technical knowledge from these companies.
      </p>
      {/* TODO: Add link to experience section */}
      <p className={styles.para}>You can read more about my experience in my experiences section.</p>
      {/* TODO: add a timeline here just like https://jacekjeznach.com/ */}

      <h2 className={styles.subHead}>Hobbies</h2>
      <p className={styles.para}>
        In my free time, I like to draw, sketch, sing, read, mentor, write blogs, learn something new... <span title="tired">🥱</span>
        <br />I have lots of those hobbies. So many, that even I forget sometimes. <span title="mock">😜</span>
      </p>
    </article>
  );
};

export default AboutScreen;
