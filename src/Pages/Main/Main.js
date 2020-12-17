import React from "react";
import Wrapper from "Components/Wrapper";
import Layout from "Components/Layout/Layout";
import Profile from "Components/Profile";
import Recommend from "Components/Recommend";
import LiveStories from "Components/LiveStories";
import { useSelector } from "react-redux";
import "./main.scss";

const Main = props => {
  const user = useSelector(state => state.user);

  return (
    <>
      <Wrapper>
        <div className="main-container">
          <div className="main-inner">
            <div className="main-left">
              <LiveStories />
              <Layout />
              <Layout />
            </div>
            <div className="main-right">
              <div className="my-pf-container">
                <Profile
                  url={
                    user[0]?.image_url ??
                    "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/120288681_808150636668713_1917941423406171055_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=105&_nc_ohc=FSX0lotSjFkAX97Onb9&tp=1&oh=7388996391d84f379d7297138f4e06e7&oe=5FEF3658"
                  }
                  id={user[0]?.username ?? "dooreplay"}
                  desc={user[0]?.description ?? "Doori Kim"}
                  btn="전환"
                  size="56"
                />
              </div>
              <Recommend />
            </div>
            <div className="main-right-guard" />
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Main;
