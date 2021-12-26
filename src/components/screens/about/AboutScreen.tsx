import * as React from "react";
import { IAboutSection } from "../../../types/portfolioSectionTypes";
import { convertArrayToString, countNumberOfYears } from "../../../utilities/utils";
import Name from "../../generic/Name/Name";
import styles from "./AboutScreen.module.scss";
import axios from "../../../utilities/axios";
import Loader from "../../generic/Loader/Loader";
import SomethingWentWrong from "../../generic/SomethingWentWrong/SomethingWentWrong";
import { AxiosError } from "axios";
import { IError, IErrorType, IResponse } from "../../../types/genericTypes";
import handleError from "../../../utilities/handleError";
import { Link } from "react-router-dom";

interface AboutScreenProps {}

type TAbout = IResponse<IAboutSection>;

const AboutScreen: React.FunctionComponent<AboutScreenProps> = () => {
  const [data, setData] = React.useState<IAboutSection | null>(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState<IErrorType | null>(null);

  const yearsExp = countNumberOfYears(new Date(), new Date("26 Nov, 2018"));

  React.useEffect(() => {
    callApi();
  }, []);

  function callApi() {
    setIsLoading(true);

    axios
      .get<TAbout>("/v1/about")
      .then(res => {
        setData(res.data.data);
        setIsLoading(false);
        setError(null);
      })
      .catch((err: AxiosError<IError>) => {
        setData(null);
        setIsLoading(false);
        handleError(err, setError);
      });
  }

  return isLoading ? (
    <div className="cont center">
      <Loader size={200} />
    </div>
  ) : error ? (
    <SomethingWentWrong reload={error.reload} reloadFn={callApi}>
      <p>{error.msg}</p>
    </SomethingWentWrong>
  ) : (
    data && (
      <article className="cont">
        <h1 className="heading">
          <Name />
        </h1>

        <p className={styles.para}>
          I am a {data.position} in {data.company}. I am located in {data.location}. I have around {yearsExp}yrs of professional experience.
          I love learning and trying new things. And after learning, I love to share my knowledge with the world; mentoring people is one of
          the things that I do in my spare time.
        </p>
        <img src={process.env.PUBLIC_URL + "/assets/images/me.png"} className={styles.headshot} alt="Sakshi's Headshot" />

        <h2 className={styles.subHead}>Previous Experience</h2>
        <p className={styles.para}>
          Before {data.company}, I have worked in {convertArrayToString(data.prevCompanies)}. I have gained lots of technical and
          non-technical knowledge from these companies.
        </p>

        <p className={styles.para}>You can read more about my experience in my <Link to="experience">experiences section</Link>.</p>
        {/* TODO: add a timeline here just like https://jacekjeznach.com/ */}

        <h2 className={styles.subHead}>Hobbies</h2>
        <p className={styles.para}>
          In my free time, I like to draw, sketch, sing, read, mentor, write blogs, learn something new... <span title="tired">🥱</span>
          <br />I have lots of those hobbies. So many, that even I forget sometimes. <span title="mock">😜</span>
        </p>
      </article>
    )
  );
};

export default AboutScreen;
