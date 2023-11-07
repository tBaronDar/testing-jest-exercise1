import { useState } from "react";

import Output from "./Output";
import Async from "./Async";

const Greeting = () => {
  const [showText, setShowText] = useState(false);
  const showTextHandler = () => {
    setShowText(!showText);
  };
  return (
    <div>
      <h2>Hello World!</h2>
      {!showText && <Output>Good to see you.</Output>}
      {showText && <Output>Changed!</Output>}
      <button onClick={showTextHandler}>Show Text</button>
      <Async />
    </div>
  );
};

export default Greeting;
