import "./App.css";
import AddTask from "./components/addTask/AddTask";
import Header from "./components/header/Header";
// import { Container } from "reactstrap";
import { useEffect, useState } from "react";
import Tasks from "./components/tasks/Tasks";

function App() {
  // ! Tasks propsları
  // ? inputdan gelen veriler için useState kullandım
  // ? Verilerimi localStorage'da topladığım için ilk olarakda orda yer alan bilgileri okumam gerekiyor fakat burda localStorage'ım boş olduğunda null problemini alabilirim, bunuda engellemek için || yapıp eğer veri yoksa boş arayi almasını sağladık
  const [task, setTask] = useState(
    JSON.parse(localStorage.getItem("task")) || []
  );
  // !  Button ve Header JS propsları
  const [showAddTask, setShowAddTask] = useState(true);
  const toggleShow = () => setShowAddTask(!showAddTask);
  // ? ==============================
  // ! Add tasks propsları(unique key problemini çözmek için  Task'lerime id ekledim, )
  const addTask = (newTask) => {
    const id = Math.random().toString(36).substr(2, 9);
    const addNewTask = { id, ...newTask };
    setTask([...task, addNewTask]);
  };

  const toggleDone = (toggleDoneId) => {
    setTask(
      task.map((task) =>
        task.id === toggleDoneId ? { ...task, isDone: !task.isDone } : task
      )
    );
  };

  // ? ilgili task'i silmek için id'yi filterladım ve belirtilen id dışında kalan id'leri alarak gelen id'de ki task'i kaldırmış oldum
  const deleteTask = (deletedTaskId) => {
    setTask(task.filter((task) => task.id !== deletedTaskId));
  };
  // * isDone'ı tıklamayla değiştimek için toggleDone diye bir değişken oluturup task'ime ekledim ve !task.isDone diyerek her tıklamada değiştirttim

  // ! Girilen değerleri local storage'da saklamk istiyorum bu yüzden task kısmında değişiklik olduğunda direkt localStorage'a aktarıyorum
  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(task));
  }, [task]);

  return (
    <div className="App bg-light ">
      <Header toggleShow={toggleShow} showAddTask={showAddTask} />
      {showAddTask && <AddTask addTask={addTask} />}
      {task?.length > 0 ? (
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
  );
}

export default App;
