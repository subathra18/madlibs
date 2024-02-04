import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchQuestions } from "../features/questionnaire";

import Card from "./Card";

const CardContainer = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answer, setAnswer] = useState([]);
  const [isInitialQuestionSetOver, setIsInitialQuestionSetOver] =
    useState(false);
  const dispatch = useDispatch();

  const initialQuestions = useSelector((state) => {
    return state.questionnaires.initialQuestions;
  });
  const nextSetOfQuestions = useSelector((state) => {
    return state.questionnaires.nextSetOfQuestions;
  });

  console.log("nsq", nextSetOfQuestions);

  const [currentQuestionnaire, setCurrentQuestionnaire] =
    useState(initialQuestions);

  useEffect(() => {
    const qn = isInitialQuestionSetOver ? nextSetOfQuestions : initialQuestions;
    setCurrentQuestionnaire(qn);
  }, [isInitialQuestionSetOver]);

  const fetchNextSetOfQuestions = (ans) => {
    dispatch({ type: fetchQuestions, payload: { answer: [...answer, ans] } });
    console.log("nsqw", nextSetOfQuestions);
    // setCurrentQuestionnaire(nextSetOfQuestions);
  };

  const handleAnswerChange = (qnId, key, answer) => {
    setAnswer((answerArray) => {
      return [...answerArray, { qnId, key, answer }];
    });
  };
  const submitAnswers = () => {
    console.log("inside submit answers");
  };

  const handleButtonClick = (qnid, key, ans) => {
    if (
      !isInitialQuestionSetOver &&
      questionIndex == initialQuestions.length - 1
    ) {
      setIsInitialQuestionSetOver(true);
      fetchNextSetOfQuestions({ qnid, key, ans });

      setQuestionIndex(0);
      handleAnswerChange(qnid, key, ans);
    } else if (
      isInitialQuestionSetOver &&
      questionIndex == currentQuestionnaire.length - 1
    ) {
      submitAnswers();
    } else {
      handleAnswerChange(qnid, key, ans);
      setQuestionIndex((index) => {
        return index + 1;
      });
    }
  };

  return (
    <Card
      questionObj={currentQuestionnaire[questionIndex]}
      handleAnswerChange={handleAnswerChange}
      handleButtonClick={handleButtonClick}
      buttonText="next"
    ></Card>
  );
};

export default CardContainer;
