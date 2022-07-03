import "./Tasks.css";
import { Button } from "reactstrap";
const Tasks = ({ task, deleteTask, toggleDone, setTask }) => {
  // ! Alert mesajı için bir fonksiyon yazdım
  function showAlert(type, message) {
    const alert = document.createElement("div");
    alert.className = `alert alert-${type}`;
    alert.textContent = message;
    const alertPlace = document.querySelector("ul");
    alertPlace.append(alert);
    setTimeout(function () {
      alert.remove();
    }, 1000);
  }
  // ? ==============================

  return (
    <section>
      <ul className="allTodos my-1 p-0">
        {task?.map((task) => {
          // ! Taskden gelen verileri dest. yaptım
          const { text, tasks: date, isDone, id } = task;
          return (
            <li key={id} className={`task ${isDone ? "checked" : ""}`}>
              <div className="text ">
                <i
                  // ? onClick'e toggle down'ı ekleyerek isDone verimi manipüle ettim
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
