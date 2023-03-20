import React, { useEffect, useRef, useState } from "react";
import useClickOutSide from "../hooks/useClickOutSide";

const Dropdown = () => {
  const { show, setShow, nodeRef } = useClickOutSide();
  return (
    <div className="relative w-full max-w-[400px] " ref={nodeRef}>
      <div
        className="p-5 border border-gray-200 rounded-lg w-full cursor-pointer"
        onClick={() => setShow(!show)}
      >
        Selected
      </div>
      {show && (
        <div className=" border border-gray-200 rounded-lg absolute top-full w-full left-0 bg-white ">
          <div className="p-5 cursor-pointer">Javascript</div>
          <div className="p-5 cursor-pointer">Reactjs</div>
          <div className="p-5 cursor-pointer">Vuejs</div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
