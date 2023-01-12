import FormList from "./FormList";
import FormInput from "./FormInput";
import "./App.css";
import { useState } from "react";

function App() {
  const [newObj, setnewObj] = useState([]);
  const [newDate, setnewDate] = useState([]);

  const getDataHandler = (data, date) => {
    setnewObj((previousData) => [...previousData, data]);

    setnewDate((previousDate) => [...previousDate, date]);
    console.log(data);
    console.log(date);
  };

  const cutomClickHandler = (Id) => {
    console.log(Id);
    console.log("clicked");
    setnewObj(
      [...newObj].filter((del) => {
        return del.id !== Id;
      })
    );
  };

  return (
    <div className="App">
      <FormInput ongetData={getDataHandler} />
      {newObj.map((ele, index) => {
        return (
          <FormList
            item={newObj}
            date={newDate[index]}
            key={ele.id}
            title={ele.title}
            onClickHandler={() => cutomClickHandler(ele.id)}
          />
        );
      })}
    </div>
  );
}

export default App;
