import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Pages/Main";
import Login from "./Pages/Login";
import Counter from "./Pages/Counter";
import MyPage from "./Pages/MyPage";
import Detail from "./Pages/Detail/index.js";
import "./styles/reset.scss";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/myPage" component={MyPage} />
          <Route exact path="/detail" component={Detail} />
          <Route exact path="/counter" component={Counter} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
