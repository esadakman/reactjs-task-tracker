import "./App.css";
import DatePicker from "react-date-picker";

import { useState } from "react";

function App() {
  const [value, onChange] = useState(new Date());
  return (
    <div className="App">
      <DatePicker onChange={onChange} value={value} />
    </div>
  );
}

export default App;
