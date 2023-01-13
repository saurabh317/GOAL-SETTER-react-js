import FormList from "./FormList";
import FormInput from "./FormInput";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
  const [ newObj, setnewObj ] = useState([]);
  const [ newDate, setnewDate ] = useState([]);

  const getDataHandler = (data, date) => {
    setnewObj((previousData) => [ ...previousData, data ]);

    setnewDate((previousDate) => [ ...previousDate, date ]);
    console.log(data);
    console.log(date);
  };

  const cutomClickHandler = (Id) => {
    console.log(Id);
    // console.log("clicked");
    setnewObj(
      [ ...newObj ].filter((currentValue) => {
        return currentValue.id !== Id;
      })
    );
  };


  const resultData = function (currentValue, index) {
    return (
      <FormList
        item={newObj}
        date={newDate[ index ]}
        key={currentValue.id}
        title={currentValue.title}
        onClickHandler={() => cutomClickHandler(currentValue.id)}
      />
    );

  }

  return (
    <div className={styles.App}>
      <FormInput ongetData={getDataHandler} />
      {newObj.map(resultData)}
    </div>
  );
}

export default App;
