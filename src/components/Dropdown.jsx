import React from "react";
import { useEffect } from "react";

const Dropdown = ({ options, selectedValue, onSelectHandler }) => {
  useEffect(() => {
    const val = selectedValue || options[0];
    onSelectHandler(val);
  }, []);

  return (
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn m-1">
        {selectedValue || options[0]}
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        {options.map((value) => {
          return (
            <li
              key={value}
              onClick={() => {
                onSelectHandler(value);
              }}
            >
              <a>{value}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Dropdown;
