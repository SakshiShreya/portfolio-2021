import { faCodepen, faGithub, faLinkedin, faTelegram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";
import headStyles from "../../generic/Name/Name.module.scss";
import styles from "./ContactScreen.module.scss";
import FeedbackForm from "./FeedbackForm";

interface ContactScreenProps {}

const ContactScreen: React.FunctionComponent<ContactScreenProps> = () => {
  return (
    <section className="cont">
      <h1 className="heading">
        <span className={headStyles.green}>H</span>ow can I <span className={headStyles.orange}>H</span>elp?
      </h1>

      <p className="para">Hi there! Please feel free to reach out. </p>
      <p className="para">
        <span className={styles.stars}>⭐&nbsp;&nbsp;⭐&nbsp;&nbsp;⭐&nbsp;&nbsp;⭐&nbsp;&nbsp;⭐&nbsp;&nbsp;⭐&nbsp;&nbsp;⭐</span>
        Please mention where you found my contact and the reason for contacting, instead of a 'hi', otherwise I may miss your message and I
        do not want to miss the opportunity of talking to you.
        <span className={styles.stars}>⭐&nbsp;&nbsp;⭐&nbsp;&nbsp;⭐&nbsp;&nbsp;⭐&nbsp;&nbsp;⭐&nbsp;&nbsp;⭐&nbsp;&nbsp;⭐</span>
      </p>

      <FeedbackForm />

      <h2 className={styles.subHead}>Or you can find me on below links:</h2>
      <ul className={styles.icons}>
        <li>
          <a href="mailto:shreyasakshi96@gmail.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/shreyasakshi96" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faTwitter} className={styles.icon} />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/sakshishreya/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
          </a>
        </li>
        <li>
          <a href="https://t.me/SakshiShreya" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faTelegram} className={styles.icon} />
          </a>
        </li>
      </ul>

      <h2 className={styles.subHead}>Other links:</h2>
      <ul className={styles.icons}>
        <li>
          <a href="https://www.youtube.com/sakshishreya" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faYoutube} className={styles.icon} />
          </a>
        </li>
        <li>
          <a href="https://github.com/SakshiShreya" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} className={styles.icon} />
          </a>
        </li>
        <li>
          <a href="https://codepen.io/shreyasakshi96/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faCodepen} className={styles.icon} />
          </a>
        </li>
      </ul>
    </section>
  );
};

export default ContactScreen;
