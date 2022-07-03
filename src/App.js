import "./App.css";
import AddTask from "./components/addTask/AddTask";
import Header from "./components/header/Header";
import { Container } from "reactstrap";
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

  return (
    <>
      <Container className="App bg-light ">
        <Header toggleShow={toggleShow} showAddTask={showAddTask} />
        {showAddTask && <AddTask addTask={addTask} />}
        <Tasks task={task} />
      </Container>
    </>
  );
}

export default App;
