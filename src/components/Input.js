import React, { useEffect, useRef } from "react";

const Input = () => {
  const inputRef = useRef();
  const divRef = useRef();
  console.log("divRef", divRef);
  console.log("inputRef", inputRef);
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);
  return (
    <div className="input-div" ref={divRef}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Auto focus"
        className="inline-block p-5 border border-gray-200 focus:border-blue-400"
      />
    </div>
  );
};

export default Input;
