import { createSlice } from "@reduxjs/toolkit";
import data from "../data/data_new.json";
const NEXT_SET_KEY = "relationship";

const { questionnaires } = data;

const initialState = {
  questionnaires: questionnaires,
  currentQuestionnaire: questionnaires.initialQuestionnaire,
  answers: "",
  nextSetKey: NEXT_SET_KEY,
};
const questionnaireSlice = createSlice({
  name: "questionnaires",
  initialState: initialState,
  reducers: {
    fetchNextQuestionnaire: (state, action) => {
      const answerObj = action.payload.answer;
      const key = answerObj.find((ans) => {
        return ans.key == state.nextSetKey ? ans.answer : "";
      });
      const relationshipAnswer = key.answer;
      state.currentQuestionnaire = state.questionnaires[relationshipAnswer];
    },
  },
});

export const { fetchNextQuestionnaire } = questionnaireSlice.actions;

export default questionnaireSlice.reducer;
