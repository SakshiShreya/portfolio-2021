import axios from "axios";
import { FunctionComponent, useState } from "react";
import Input from "../../generic/input/Input";
import styles from "./ContactScreen.module.scss";

interface FeedbackFormProps {}

const FeedbackForm: FunctionComponent<FeedbackFormProps> = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [userFeedback, setUserFeedback] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    switch (name) {
      case "name":
        setName(value);
        return;
      case "email":
        setEmail(value);
        return;
      case "message":
        setMessage(value);
        return;
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios.post("v1/feedback", { name, email, message }).then(() => {
      setName("");
      setEmail("");
      setMessage("");
      setUserFeedback("Thank you for your feedback!");
    }).catch((err) => {
      setUserFeedback("Something went wrong. Please try again later. " + JSON.stringify(err));
    });
  };

  return (
    <>
      <h2 className={styles.subHead}>Please provide your details</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input label="Name *" name="name" id="name" value={name} onChange={handleChange} required maxLength={20} minLength={3} />
        <Input label="Email" name="email" id="email" type="email" value={email} onChange={handleChange} />
        <Input label="Message *" name="message" id="message" type="textarea" value={message} onChange={handleChange} required />
        <div>*: Required field</div>
        {userFeedback && <div className={styles.userFeedback}>{userFeedback}</div>}
        <button type="submit" className={"btn primary large fill " + styles.submit}>
          Submit
        </button>
      </form>
    </>
  );
};

export default FeedbackForm;
