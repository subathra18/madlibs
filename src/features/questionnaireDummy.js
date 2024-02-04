import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import data from "../data/data.json"; //just to mock the API data

const initialState = {
  initialQuestions: data.initialQuestions,
  nextSetKey: "relationship",
  question: data.initialQuestions[0],
  questionnaire: data,
};

export const getQuestion = createAsyncThunk(
  //just to mimic api calls
  "questionnaire/getQuestion",
  (id, thunkAPI) => {
    try {
      const resp = data.initialQuestions;
      console.log("id,data", id, resp);
      return resp;
    } catch (error) {
      return thunkAPI.rejectWithValue("no data");
    }
  }
);

const questionnaireSlice = createSlice({
  name: "questionnaires",
  initialState,
  reducers: {
    fetchQuestions: (state, action) => {
      const temp = [
        {
          question: "where did you first meet",
          key: "place",
          CTAType: "next",
          option: [],
        },
        {
          question: "how many years of relationship",
          key: "years_of_relationship",
          CTAType: "next",
          option: [],
        },
        {
          question: "what was the weather like when u met",
          key: "weather",
          CTAType: "submit",
          option: ["sunny", "cloudy", "rainy", "stormy", "pleasant"],
        },
      ];
      console.log("Action", action, state.nextSetKey);
      const answerObj = action.payload.answer;
      const key = answerObj.filter((ans) => {
        console.log(ans.key, state.nextSetKey, ans.key == state.nextSetKey);
        return ans.key == state.nextSetKey;
      });
      console.log("inside", key[0].ans);
      //state.nextSetOfQuestions =
      //state.questionnaire.madlibs[key[0].ans].questionnaire;
      state.nextSetOfQuestions = temp;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getQuestion.pending, (state) => {
        console.log("inside pending");
      })
      .addCase(getQuestion.fulfilled, (state, { payload }) => {
        console.log("inside fullfilled", payload);
      })
      .addCase(getQuestion.rejected, (state, data) => {
        console.log("inside rejected", data);
      });
  },
});

export const { fetchQuestions } = questionnaireSlice.actions;

export default questionnaireSlice.reducer;
