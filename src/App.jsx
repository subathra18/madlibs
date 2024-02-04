import React from "react";
import { Provider } from "react-redux";
import Header from "./components/Header";
import Layout from "./components/Layout";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <Header></Header>
      <Layout></Layout>
    </Provider>
  );
};

export default App;
