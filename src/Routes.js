import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LoginSS from "./pages/sanseong/Login/Login";
import MainSS from "./pages/sanseong/Main/Main";

import LoginTY from "./pages/beforesun/Login/Login";
import MainTY from "./pages/beforesun/Main/Main";

import LoginD from "./pages/dan/Login/Login";
import MainD from "./pages/dan/Main/Main";

import LoginHH from "./pages/heyho/Login/Login";
import MainHH from "./pages/heyho/Main/Main";

import LoginYH from "./pages/yonghyun/Login/Login";
import MainYH from "./pages/yonghyun/Main/Main";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/login-SS" component={LoginSS} />
          <Route exact path="/Main-SS" component={MainSS} />

          <Route exact path="/login-TY" component={LoginTY} />
          <Route exact path="/Main-TY" component={MainTY} />

          <Route exact path="/login-D" component={LoginD} />
          <Route exact path="/Main-D" component={MainD} />

          <Route exact path="/login-HH" component={LoginHH} />
          <Route exact path="/Main-HH" component={MainHH} />

          <Route exact path="/login-YH" component={LoginYH} />
          <Route exact path="/Main-YH" component={MainYH} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
