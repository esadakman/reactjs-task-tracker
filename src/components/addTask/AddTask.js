import "./AddTask.css";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { useState } from "react";

const AddTask = ({ addTask }) => {
  const [text, setText] = useState("");
  const [time, setTime] = useState("");
  const [datetime, setDatetime] = useState("");
  const [tasks, setTasks] = useState("");
  // console.log(text);
  // console.log(time);
  // console.log(datetime);
  const onSubmit = (e) => {
    e.preventDefault();

    addTask({ tasks, isDone: false });

    setText("");
    setDatetime("");
    setTime("");
  };
  // console.log(tasks);
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
          <Label htmlFor="day">Day</Label>

          <Input
            id="day"
            name="day"
            type="date"
            required
            value={datetime}
            onChange={(e) => setDatetime(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="times">Time</Label>
          <Input
            id="times"
            name="times"
            type="time"
            required
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </FormGroup>

        <div className="btn-div">
          <Button
            color="primary"
            className="submit"
            onClick={() => setTasks(`${text} ${datetime} ${time}`)}
          >
            Save Task
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default AddTask;
