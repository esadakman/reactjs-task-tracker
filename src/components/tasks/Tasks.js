import "./Tasks.css";
import { Button } from "reactstrap";
const Tasks = ({ task, deleteTask, toggleDone }) => {
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
                  <span>{text}</span>
                  <span className="date-text">{date}</span>
                </div>
              </div>
              <i onClick={() => deleteTask(id)} className="fa fa-remove "></i>
            </li>
          );
        })}
      </ul>
      <Button color="danger" className="delete my-2">
        Delete All Task
      </Button>
    </section>
  );
};

export default Tasks;
