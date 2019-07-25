import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import Header from "../layout/Header";
import Dashboard from "../checc/Dashboard";

import { Provider } from "react-redux";
import store from "../../store";
import { Link } from "react-router-dom";

export default function Board() {
  return (
    <Provider store={store}>
      <Fragment>
        <Header />
        <div className="container">
          <Dashboard />
          <Link to="/form">Form only</Link>
        </div>
      </Fragment>
    </Provider>
  );
}
