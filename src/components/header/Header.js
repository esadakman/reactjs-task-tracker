import "./Header.css";
import { Container } from "reactstrap";
import Buttons from "./Buttons";
const Header = ({ toggleShow, showAddTask }) => {
  return (
    <Container className="containers  d-flex flex-column align-items-center ">
      <h1 className="text-dark">Task Tracker</h1>
      <Buttons
        color={showAddTask ? "danger" : "success"}
        text={showAddTask ? "Close Add Task Bar" : "Show Add Task Bar"}
        toggleShow={toggleShow}
      />
    </Container>
  );
};

export default Header;
