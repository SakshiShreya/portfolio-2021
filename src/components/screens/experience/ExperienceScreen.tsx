import * as React from "react";
import styles from "./ExperienceScreen.module.scss";
import headStyles from "../../generic/Name/Name.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { DeviceContext } from "../../../context/DeviceContext";
import { IError, IErrorType, IResponse } from "../../../types/genericTypes";
import { IExperienceRaw, IExperience } from "../../../types/portfolioSectionTypes";
import axios from "axios";
import { AxiosError } from "axios";
import handleError from "../../../utilities/handleError";
import Loader from "../../generic/Loader/Loader";
import SomethingWentWrong from "../../generic/SomethingWentWrong/SomethingWentWrong";
import moment from "moment";
import { diffYMD, stringifyDuration } from "../../../utilities/utils";
import Pills from "../../generic/Pills/Pills";

interface ExperienceScreenProps {}

type TExperience = IResponse<Array<IExperienceRaw>>;

function groupCompanies(experiences: Array<IExperienceRaw>) {
  const result: Array<IExperience> = [];

  experiences.sort((exp1, exp2) => exp2.order - exp1.order);

  let start = 0;
  let end = 1;

  while (end <= experiences.length) {
    while (end < experiences.length && experiences[end].company === experiences[start].company) {
      end++;
    }

    let groupedExp: IExperience = {
      _id: experiences
        .slice(start, end)
        .map(exp => exp._id)
        .join(""),
      company: experiences[start].company,
      logo: experiences[start].logo,
      duration: diffYMD(moment(experiences[start].end), moment(experiences[end - 1].start)),
      group: []
    };

    // when we find a company which is different, then group previous company
    // find next non-empty desc

    let start1 = start;
    let end1 = start1 + 1;

    while (end1 <= end) {
      while (end1 < experiences.length && !experiences[end1].desc.length) {
        end1++;
      }

      const slicedData = experiences.slice(start1, end1);

      const _id = slicedData.map(exp => exp._id).join("");
      const desc = experiences[start1].desc;
      const designationAndDates = slicedData.map(({ _id, designation, start, end }) => ({ _id, designation, start, end }));
      const tech = experiences[start1].tech;

      groupedExp.group.push({ _id, desc, designationAndDates, tech });

      start1 = end1++;
    }

    result.push(groupedExp);
    start = end++;
  }

  console.log(result);
  return result;
}

const ExperienceScreen: React.FunctionComponent<ExperienceScreenProps> = () => {
  const { device } = React.useContext(DeviceContext);
  const [data, setData] = React.useState<Array<IExperience>>([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState<IErrorType | null>(null);

  React.useEffect(() => {
    callApi();
  }, []);

  function callApi() {
    setIsLoading(true);

    axios
      .get<TExperience>("/v1/experience")
      .then(res => {
        const data: Array<IExperience> = groupCompanies(res.data.data);

        setData(data);
        setIsLoading(false);
        setError(null);
      })
      .catch((err: AxiosError<IError>) => {
        setData([]);
        setIsLoading(false);
        handleError(err, setError);
      });
  }

  function scrollToTop() {
    const contentEl = document.getElementById("content");
    contentEl?.scrollTo({
      top: 0,
      behavior: "smooth"
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
    <section className="cont">
      <h1 className="heading">
        <span className={headStyles.green}>W</span>here I've <span className={headStyles.orange}>W</span>orked
      </h1>

      <div className={styles.wrapper}>
        {/* line and Scroll to top */}
        {device !== "mobile" && (
          <div className={styles.line}>
            <button onClick={scrollToTop} className={`${styles.icon} ${styles.scrollIcon}`}>
              <FontAwesomeIcon icon={faCaretUp} />
            </button>
          </div>
        )}

        {data.map(({ _id, company, logo, duration, group }) => (
          <div className={styles.row} key={_id}>
            <section>
              {/* Header */}
              <div className={styles.header}>
                <div className={styles.icon}>
                  <img src={logo} className={styles.logo} alt={company + "logo"} />
                </div>

                <div>
                  <h2 className="h3">{company}</h2>
                  <span className={styles.duration}>{stringifyDuration(duration)}</span>
                </div>
              </div>

              {/* Content */}
              {group.map(({ _id, designationAndDates, desc, tech }) => (
                <div className={styles.content} key={_id}>
                  {/* Designation and date */}
                  <ul className={styles.designationAndDates}>
                    {designationAndDates.map(({ _id, designation, start, end }) => (
                      <li key={_id} className={styles.designation}>
                        <span className={`${styles.desgntn} h4`}>{designation}</span>
                        <span className={`${styles.date} h4`}>
                          ({moment(start).format("DD MMM, YYYY")} - {end ? moment(end).format("DD MMM, YYYY") : "Present"})
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Description */}
                  {!!desc.length && (
                    <ul className={styles.descCont}>
                      {desc.map(line => (
                        <li className={styles.desc} key={line}>
                          {line}
                        </li>
                      ))}
                    </ul>
                  )}

                  {!!tech.length && (
                    <div className={styles.pills}>
                      <Pills list={tech.map(pill => ({ id: pill, display: pill }))} color="secondary" />
                    </div>
                  )}
                </div>
              ))}
            </section>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceScreen;
