// import { useState } from "react";

import "./AddTask.css";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { useState } from "react";

const AddTask = () => {
  const [text, setText] = useState("");
  // const [day, setDay] = useState("");
  const [time, setTime] = useState("");
  const [datetime, setDatetime] = useState("");
  // console.log(text);
  // console.log(time);
  // console.log(datetime);
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="AddTask">
      <Form className="form" onSubmit={onSubmit}>
        <FormGroup>
          <Label htmlFor="task">Task</Label>
          <Input
            id="task"
            name="text"
            type="text"
            placeholder="AddTask"
            required
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="day">Day</label>

          <input
            id="day"
            name="day"
            type="date"
            required
            value={datetime}
            onChange={(e) => setDatetime(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="times">Time</label>
          <input
            id="times"
            name="times"
            type="time"
            required
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    </div>
  );
};

export default AddTask;

// import DatePicker from "react-date-picker";
//         const [value, onChange] = useState(new Date());
//         <DatePicker
//           className="  bg-light rounded-5"
//           onChange={onChange}
//           value={value}
//         />

// <div>
//   <DatePicker
//     className="dP  bg-light rounded-5"
//     onChange={onChange}
//     value={value}
//   />
// </div>
