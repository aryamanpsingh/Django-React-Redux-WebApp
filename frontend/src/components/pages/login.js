import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import Header from "../layout/Header";
import LoginForm from "../users/login";

import { Provider } from "react-redux";
import store from "../../store";

export default function Login() {
  return (
    <Provider store={store}>
      <Fragment>
        <div className="container">
          <LoginForm />
        </div>
      </Fragment>
    </Provider>
  );
}
