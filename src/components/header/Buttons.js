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
