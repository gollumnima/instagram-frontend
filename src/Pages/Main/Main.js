import React from "react";
import Navbar from "Components/Navbar";
import Layout from "Components/Layout";
import Profile from "Components/Profile";
import Recommend from "Components/Recommend";
import LiveStories from "Components/LiveStories";
import { useSelector } from "react-redux";
import "./main.scss";

const Main = props => {
  const user = useSelector(state => state.user);

  return (
    <>
      <Navbar />
      <div className="main-container">
        <div className="main-inner">
          <div className="main-left">
            <LiveStories />
            <Layout username="dooreplay" desc="#조랭이떡 #소중해" />
            <Layout username="dooreplay" desc="#조랭이떡 #소중해" />
          </div>
          <div className="main-right">
            <div className="my-pf-container">
              <Profile
                url={user[0]?.image_url}
                id={user[0]?.username}
                desc={user[0]?.description}
                btn="전환"
                size="56"
              />
            </div>
            <Recommend />
          </div>
          <div className="main-right-guard" />
        </div>
      </div>
    </>
  );
};

export default Main;
