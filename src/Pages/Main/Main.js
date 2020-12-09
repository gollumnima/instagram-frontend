import React from "react";
import Navbar from "Components/Navbar";
import Layout from "Components/Layout";
import Profile from "Components/Profile";
import Recommend from "Components/Recommend";
import LiveStories from "Components/LiveStories";
import "./main.scss";

const Main = () => (
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
              url="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/125803772_1165915217177196_1415869914155524541_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=vaag0qgslDgAX9gbJ37&tp=1&oh=d0361b58ee6dc19984ba4f418f32e3a8&oe=5FEF30DE"
              id="dooreplay"
              desc="Doori Kim"
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

export default Main;
