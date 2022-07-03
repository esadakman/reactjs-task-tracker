import "./App.css";
import AddTask from "./components/addTask/AddTask";
import Header from "./components/header/Header";
// import { Container } from "reactstrap";
import { useState } from "react";
import Tasks from "./components/tasks/Tasks";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);

  const toggleShow = () => setShowAddTask(!showAddTask);

  const addTask = (newTask) => {
    const id = Math.random().toString(36).substr(2, 9);
    const addNewTask = { id, ...newTask };
    setTask([...task, addNewTask]);
  };
  const [task, setTask] = useState([]);

  const deleteTask = (deletedTaskId) => {
    setTask(task.filter((task) => task.id !== deletedTaskId));
  };

  const toggleDone = (toggleDoneId) => {
    setTask(
      task.map((task) =>
        task.id === toggleDoneId ? { ...task, isDone: !task.isDone } : task
      )
    );
  };

  return (
    <>
      <div className="App bg-light ">
        <Header toggleShow={toggleShow} showAddTask={showAddTask} />
        {showAddTask && <AddTask addTask={addTask} />}
        {task.length > 0 ? (
          <Tasks
            task={task}
            deleteTask={deleteTask}
            toggleDone={toggleDone}
            setTask={setTask}
          />
        ) : (
          <h2 className="mt-3 text-center">NO TASK TO SHOW</h2>
        )}
      </div>
    </>
  );
}

export default App;
