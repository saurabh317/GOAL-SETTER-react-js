import "./FormInput.css";
import { useState } from "react";
const FormInput = (props) => {
    const [title, setTitle] = useState('');
    const submitHandler = (event) => {
        event.preventDefault();

        const date = new Date();
        const month = date.toLocaleString('en-US', { month: 'long' });
        const day = date.toLocaleString('en-US', { day: '2-digit' });
        const year = date.getFullYear();
        const currDate = `${month} ${day} ${year}`

        const obj = {
            id: (Math.random()*100).toFixed(0),
            title: title,
        }
        console.log(obj.id)
        props.ongetData(obj, currDate);
        setTitle('');


    }

    const titleHandler = (e) => {
        setTitle(e.target.value);

    }


    return (
        <div className="main_container">
            <div className="container">
                <h2>COURSE GOAL</h2>
                <form onSubmit={submitHandler}>
                    <input type="text" className="input_field" onChange={titleHandler} value={title} />
                    <button type="submit">Add Goal</button>
                </form>

            </div>
        </div>
    );
};
export default FormInput;
