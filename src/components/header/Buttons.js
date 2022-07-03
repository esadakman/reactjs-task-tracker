import { Button } from "reactstrap";

function Buttons({ toggleShow, text, color }) {
  return (
    <div className="container text-center mt-4">
      <Button color={color} onClick={toggleShow}>
        {text}
      </Button>
    </div>
  );
}

export default Buttons;

// const [show, setShow] = useState(true);
// console.log(show);
// <button
// className="btn btn-primary"
// onClick={() => setShow((prevState) => !prevState)}>
// {show ? "Show" : "Hide"}
// </button>;
// <button className="btn btn-dark" onClick={() => setShow(!show)}>Show</button>
