import "./Tasks.css";
import { Button } from "reactstrap";
const Tasks = ({ task, deleteTask, toggleDone, setTask }) => {
  console.log(task);
  return (
    <section>
      <ul className="allTodos my-1 p-0">
        {task?.map((task) => {
          const { text, tasks: date, isDone, id } = task;
          return (
            <li key={id} className={`task ${isDone ? "checked" : ""}`}>
              <div className="text ">
                <i onClick={() => toggleDone(id)} className="fa fa-check"></i>
                <div className="texts-date">
                  <span className="font-weight-bold">{text}</span>
                  <span className="date-text">{date}</span>
                </div>
              </div>
              <i onClick={() => deleteTask(id)} className="fa fa-remove "></i>
            </li>
          );
        })}
      </ul>
      <Button
        color="danger"
        className="delete my-2"
        onClick={() => setTask([])}
      >
        Delete All Task
      </Button>
    </section>
  );
};

export default Tasks;
