import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

const TextareaAutoResize = () => {
  const [text, setText] = useState("demo");
  const textareaRef = useRef(null);
  const [textAreaHeight, setTextAreaHeight] = useState("auto");
  const [parentHeight, setParentHeight] = useState("auto");
  const handleChange = (e) => {
    setTextAreaHeight("auto");
    setText(e.target.value);
  };
  useEffect(() => {
    setTextAreaHeight(`${textareaRef?.current?.scrollHeight}px`);
  }, [text]);
  return (
    <div
      className="p-5"
      style={{
        minHeight: parentHeight,
      }}
    >
      <textarea
        className="transition-all overflow-hidden w-full max-w-[400px] p-5 rounded-lg border border-gray-300 focus:border-blue-400 resize-none leading-normal outline-none"
        placeholder="Please enter your content..."
        value={text}
        onChange={handleChange}
        ref={textareaRef}
        style={{
          height: textAreaHeight,
        }}
      ></textarea>
    </div>
  );
};

export default TextareaAutoResize;
