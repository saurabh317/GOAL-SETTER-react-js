import "./FormList.css";
const FormList = (props) => {
  return (
    <>
      <div className="FormList_container" onClick={props.onClickHandler}>
        <h2 className="date">{props.date}</h2>
        <div className="head_container">
          <h2 className="head">{props.title}</h2>
        </div>
      </div>
    </>
  );
};

export default FormList;
