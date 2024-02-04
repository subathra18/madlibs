import React from "react";
import { useState } from "react";
import Input from "./Input";
import Dropdown from "./Dropdown";

const Card = ({ questionObj, handleButtonClick, buttonText }) => {
  const [answer, setAnswer] = useState("");
  const { question, type = "input" } = questionObj;

  const OnButtonClick = () => {
    handleButtonClick(questionObj.id, questionObj.key, answer);
    setAnswer("");
  };
  return (
    <div className="text-cl-text flex-row justify-content-center">
      <p className="text-3xl font-medium">{question}</p>
      <div className="text-2xl py-6">
        {type == "input" ? (
          <Input
            placeholder="pen here"
            value={answer}
            onChangeHandler={setAnswer}
          ></Input>
        ) : (
          ""
        )}
        {type == "dropdown" ? (
          <Dropdown
            selectedValue={answer}
            onSelectHandler={setAnswer}
            options={questionObj.options}
          ></Dropdown>
        ) : (
          ""
        )}
      </div>
      <button onClick={OnButtonClick} className="text-white btn bg-cl-button">
        {buttonText}
      </button>
    </div>
  );
};

export default Card;
