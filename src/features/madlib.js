import { createSlice } from "@reduxjs/toolkit";
import data from "../data/data_new.json";

const initialState = {
  madlibsArray: data.madlibs,
  defaultMadlib: "",
  generatedMadlib: "",
};

const madlibSlice = createSlice({
  name: "madlib",
  initialState,
  reducers: {
    generateMadlib: (state, action) => {
      const { answers, questionnaireID } = action.payload;
      const madlibArray = state.madlibsArray;

      const madlibObj = state.madlibsArray.find((madlib) => {
        return madlib.id == questionnaireID;
      });

      var madlibToFill = madlibObj.madlib;
      answers.map(({ key, answer }) => {
        madlibToFill = madlibToFill.replace("$" + key, answer);
      });
      state.generatedMadlib = madlibToFill;
    },
  },
});

export const { generateMadlib } = madlibSlice.actions;

export default madlibSlice.reducer;
