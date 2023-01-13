import styles from "./FormList.module.css";
const FormList = (props) => {
  return (
    <>
      <div className={styles.FormList_container} onClick={props.onClickHandler}>
        <h2 className={styles.date}>{props.date}</h2>
        <div className={styles.head_container}>
          <h2 className={styles.head}>{props.title}</h2>
        </div>
      </div>
    </>
  );
};

export default FormList;
