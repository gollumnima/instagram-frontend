import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
  useLocation
} from "react-router-dom";
import { useDispatch } from "react-redux";
import { getSelf } from "store/user";
import Main from "./Pages/Main";
import Login from "./Pages/Login";
import SignUp from "Pages/SignUp";
import Counter from "./Pages/Counter";
import MyPage from "./Pages/MyPage/MyPage";
import Detail from "./Pages/Detail";
import ModalDetail from "Components/Modal/ModalDetail";
import Modal from "Components/Modal";

import "./styles/reset.scss";

const Routes = props => {
  const history = useHistory();
  const location = useLocation();
  const background = location.state?.background;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSelf());
  }, []);

  useEffect(() => {
    window.addEventListener("beforeunload", () => {
      history.replace();
    });
  }, [history]);

  return (
    <Router>
      <Switch location={background ?? location}>
        <Route exact path="/" component={Main} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/myPage" component={MyPage} />
        <Route exact path="/detail" component={Detail} />
        <Route exact path="/counter" component={Counter} />
        <Route exact path="/p/:id" component={ModalDetail} />
      </Switch>
      {background && (
        <Route path="/p/:id" render={() => <Modal location={background} />} />
      )}
    </Router>
  );
};

export default Routes;
