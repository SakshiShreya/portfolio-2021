import { FunctionComponent } from "react";
import styles from "./Input.module.scss";

interface CommonProps {
  label: string;
}

interface InputProps extends CommonProps, React.InputHTMLAttributes<HTMLInputElement> {
  type?: "text" | "email";
  forwardedRef?: React.RefObject<HTMLInputElement>;
}

interface TextAreaProps extends CommonProps, React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  type: "textarea";
  forwardedRef?: React.RefObject<HTMLTextAreaElement>;
}

const Input: FunctionComponent<InputProps | TextAreaProps> = ({ type, label, id, forwardedRef, ...props }) => {
  return (
    <div className={styles.group}>
      {type === "textarea" ? (
        <textarea
          placeholder={label}
          className={[styles.field, styles.textarea].join(" ")}
          id={id}
          ref={forwardedRef as TextAreaProps["forwardedRef"]}
          {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : (
        <input
          type={type}
          placeholder={label}
          className={styles.field}
          id={id}
          ref={forwardedRef as InputProps["forwardedRef"]}
          {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
        />
      )}
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
    </div>
  );
};

export default Input;
