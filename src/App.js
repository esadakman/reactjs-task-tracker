import "./App.css";
import AddTask from "./components/addTask/AddTask";
import Header from "./components/header/Header";
import { Container } from "reactstrap";
import { useState } from "react";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const toggleShow = () => setShowAddTask(!showAddTask);

  return (
    <Container className="App  ">
      <Header toggleShow={toggleShow} showAddTask={showAddTask} />
      <AddTask />
    </Container>
  );
}

export default App;
