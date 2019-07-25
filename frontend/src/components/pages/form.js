import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import Header from "../layout/Header";
import Form from "../checc/Form";

import { Provider } from "react-redux";
import store from "../../store";

export default function Enter() {
  return (
    <Provider store={store}>
      <Fragment>
        <Header />
        <div className="container">
          <Form />
        </div>
      </Fragment>
    </Provider>
  );
}
