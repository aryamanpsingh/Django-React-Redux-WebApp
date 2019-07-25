import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import Header from "./layout/Header";

import { Provider } from "react-redux";
import store from "../store";

import {
  HashRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";
import MainPage from "./pages";
import Enter from "./pages/form";
import Posts from "./pages/posts";
import Board from "./pages";
import Register from "./pages/register";
import Login from "./pages/login";
import { LoginForm } from "./users/login";
import PrivateRoute from "./common/PrivateRoute";
import { loadUser } from "../actions/users";

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <PrivateRoute exact path="/" component={MainPage} />
            <Route exact path="/form" component={Enter} />
            <Route exact path="/posts" component={Posts} />
            <Route exact path="/index" component={Board} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
