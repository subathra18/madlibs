import { configureStore } from "@reduxjs/toolkit";
import questionnaireSlice from "./features/questionnaires";
import madlibSlice from "./features/madlib";

const reducer = {
  questionnaires: questionnaireSlice,
  madlibs: madlibSlice,
};

const store = configureStore({
  reducer,
});

export default store;
