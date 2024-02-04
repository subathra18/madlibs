import React from "react";

const Input = ({ placeholder, value, onChangeHandler }) => {
  return (
    <input
      type="text"
      value={value}
      placeholder={placeholder}
      className="input input-lg w-full max-w-xs py-6"
      onChange={(e) => {
        onChangeHandler(e.target.value);
      }}
    />
  );
};

export default Input;
