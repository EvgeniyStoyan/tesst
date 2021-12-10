// import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      Счёт: {count}
      <button onClick={() => setCount()}>Сбросить</button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>-</button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>+</button>
    </>
  );
}

export default App;

// function Counter({initialCount}) {
//   const [count, setCount] = useState(initialCount);
//   return (
//     <>
//       Счёт: {count}
//       <button onClick={() => setCount(initialCount)}>Сбросить</button>
//       <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
//       <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
//     </>
//   );
// }
