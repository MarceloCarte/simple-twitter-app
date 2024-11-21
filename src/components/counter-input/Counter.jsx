import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1>Total: {counter} </h1>
      <button
        className="border p-2 mt-2"
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Inctementar
      </button>
    </div>
  );
}

export default Counter;
