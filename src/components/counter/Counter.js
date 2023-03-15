import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const handleClickIncreasement = () => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  };
  return (
    <button onClick={handleClickIncreasement}>Increasement {count}</button>
  );
};

export default Counter;
