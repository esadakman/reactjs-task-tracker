import { useState } from "react";
import { Button } from "reactstrap";
const Header = () => {
  const [task, setTask] = useState(false);

  const btnChange = (e) => {
    setTask(!task);
    task
      ? (e.target.className = "btn btn-danger  ")
      : (e.target.className = "btn btn-success  ");
    console.log(e.target);
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <h1>Task Tracker</h1>
      <div>
        <Button color="primary" onClick={btnChange}>
          Show Add Task Bar
        </Button>
      </div>
    </div>
  );
};

export default Header;

// import DatePicker from "react-date-picker";
//         const [value, onChange] = useState(new Date());
//         <DatePicker
//           className="  bg-light rounded-5"
//           onChange={onChange}
//           value={value}
//         />
