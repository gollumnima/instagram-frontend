import React, { useEffect } from "react";
import { Route, Switch, useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getSelf } from "store/user";
import Main from "./Pages/Main";
import Login from "./Pages/Login";
import SignUp from "Pages/SignUp";
import Counter from "./Pages/Counter";
import MyPage from "./Pages/MyPage/MyPage";
import Detail from "./Pages/Detail";
import Modal from "Components/Modal";
import ProfileImgUpload from "Pages/ProfileImgUpload/ProfileImgUpload";
import "./styles/reset.scss";

const Routes = () => {
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
    <>
      <Switch location={background ?? location}>
        <Route exact path="/" component={Main} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/:username" component={MyPage} />
        <Route path="/detail" component={Detail} />
        <Route path="/counter" component={Counter} />
        <Route path="/p/:id" component={Detail} />
        <Route path="/accounts/edit" render={() => <ProfileImgUpload />} />
      </Switch>
      {background && (
        <Route
          path="/p/:postId"
          render={() => <Modal location={background} />}
        />
      )}
    </>
  );
};

export default Routes;
