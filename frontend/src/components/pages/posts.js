import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import Header from "../layout/Header";
import Checcs from "../checc/Checcs";

import { Provider } from "react-redux";
import store from "../../store";

export default function Posts() {
  return (
    <Provider store={store}>
      <Fragment>
        <Header />
        <div className="container">
          <Checcs />
        </div>
      </Fragment>
    </Provider>
  );
}
