import "./Tasks.css";
import { Button } from "reactstrap";
const Tasks = ({ task, deleteTask, toggleDone, setTask }) => {
  function showAlert(type, message) {
    const alert = document.createElement("div");
    alert.className = `alert alert-${type}`;
    alert.textContent = message;
    const alertPlace = document.querySelector("ul");
    alertPlace.append(alert);
    console.log(alert);
    // console.log(document.querySelector("ul"));
    setTimeout(function () {
      alert.remove();
    }, 5000);
  }

  return (
    <section>
      <ul className="allTodos my-1 p-0">
        {task?.map((task) => {
          const { text, tasks: date, isDone, id } = task;
          return (
            <li key={id} className={`task ${isDone ? "checked" : ""}`}>
              <div className="text ">
                <i
                  onClick={() =>
                    toggleDone(id) & showAlert("success", `${text} is done`)
                  }
                  className="fa fa-check"
                ></i>
                <div className="texts-date">
                  <span className="task-text">{text}</span>
                  <span className="date-text">{date}</span>
                </div>
              </div>
              <i
                onClick={
                  isDone
                    ? () => deleteTask(id)
                    : () => showAlert("danger", "Please complete the task")
                }
                className="fa fa-remove "
              ></i>
            </li>
          );
        })}
      </ul>
      <Button
        color="danger"
        className="delete my-2 "
        onClick={() => setTask([])}
      >
        Delete All Task
      </Button>
    </section>
  );
};

export default Tasks;
