import styles from "./FormInput.module.css";
import { useState } from "react";





const FormInput = (props) => {
  const [title, setTitle] = useState("");
  const [isValid, setIsValid] = useState(true);
  const submitHandler = (event) => {
    event.preventDefault(); 

    const date = new Date();
    const month = date.toLocaleString("en-US", { month: "long" });
    const day = date.toLocaleString("en-US", { day: "2-digit" });
    const year = date.getFullYear();
    const currDate = `${month} ${day} ${year}`;

    const obj = {
      id: (Math.random() * 100).toFixed(0),
      title: title,
    };
    console.log(obj.id);
    if (title.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.ongetData(obj, currDate);
    setTitle("");
  };

  const titleHandler = (e) => {
    if (e.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setTitle(e.target.value);
  };

  return (
    <div className={styles.main_container}>
      <div className={styles.container}>
        <h2 className={`${[styles.head]} ${!isValid ? [styles.name_valid] : '' }`}>GOAL</h2>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            className={`${[styles.input_field]} ${!isValid ? [styles.valid] : ''}`}
            onChange={titleHandler}
            value={title}
          />
          <button type="submit">Add Goal</button>
        </form>
      </div>
    </div>
  );
};
export default FormInput;
