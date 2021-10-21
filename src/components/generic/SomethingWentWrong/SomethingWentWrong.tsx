import { FunctionComponent } from "react";
import styles from "./SomethingWentWrong.module.scss";

interface SomethingWentWrongProps {
  title?: string;
  reload?: boolean;
  reloadFn?: () => void;
}

const SomethingWentWrong: FunctionComponent<SomethingWentWrongProps> = props => {
  return (
    <section className={styles.cont}>
      <i className="fa fa-exclamation-circle" aria-hidden="true"></i>
      <h1>{props.title || "Oops! Something went wrong"}</h1>
      {props.children && <div className={styles.content}>{props.children}</div>}
      <div className={styles.ctas}>
        {props.reload && (
          <button className={"btn secondary medium fill " + styles.reload} onClick={props.reloadFn}>
            Reload
          </button>
        )}
        {/* TODO: Take to the contacts page */}
        <button className={"btn primary medium fill"}>
          Give Feedback
        </button>
      </div>
    </section>
  );
};

export default SomethingWentWrong;
