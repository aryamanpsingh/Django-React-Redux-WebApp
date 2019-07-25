import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import Header from "../layout/Header";
import RegisterUser from "../users/register";

import { Provider } from "react-redux";
import store from "../../store";

export default function Register() {
  return (
    <Provider store={store}>
      <Fragment>
        <div className="container">
          <RegisterUser />
        </div>
      </Fragment>
    </Provider>
  );
}
