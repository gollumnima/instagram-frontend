import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getSelf } from "store/user";
import Main from "./Pages/Main";
import Login from "./Pages/Login";
import SignUp from "Pages/SignUp";
import Counter from "./Pages/Counter";
import MyPage from "./Pages/MyPage/MyPage";
import Detail from "./Pages/Detail";
import ModalDetail from "Components/Modal/ModalDetail";
import "./styles/reset.scss";

const Routes = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSelf());
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/myPage" component={MyPage} />
        <Route exact path="/detail" component={Detail} />
        <Route exact path="/counter" component={Counter} />
        <Route excat path="/p/:id" component={ModalDetail} />
        {/* // 추후 /p/:post_id 로 변경하기 */}
      </Switch>
    </Router>
  );
};

export default Routes;
