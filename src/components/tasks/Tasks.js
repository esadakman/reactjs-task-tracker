import "./Tasks.css";

const Tasks = ({ task }) => {
  console.log(task);

  return (
    <ul className="allTodos my-1 p-0">
      {/* <li className="d-flex " id=" ">
        <div className="text ">
          <i className="fa fa-check"></i>
          <div className="texts-date">
            <span>asdasdasdasdasdasdasdasdasdasdasdasdasdsadadsdasdsa</span>
            <span className="date-text">date</span>
          </div>
        </div>
        <i className="fa fa-remove "></i>
      </li> */}
    </ul>
  );
};

export default Tasks;
