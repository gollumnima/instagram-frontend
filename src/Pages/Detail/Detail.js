import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Wrapper from "Components/Wrapper/Wrapper";
import ModalDetail from "Components/Modal/ModalDetail";
import { findUser } from "store/user";
import "./detail.scss";

const Detail = props => {
  const dispatch = useDispatch();
  const foundUser = useSelector(state => state.user?.foundUser);
  const handleUser = () => {
    //dispatch(findUser(post?.User?.id));
  };

  useEffect(() => {
    handleUser();
  }, []);

  return (
    <Wrapper>
      <div className="detail__wrap">
        <div className="detail__wrap__background">
          <ModalDetail postId={props.match.params.id} />
        </div>
      </div>
    </Wrapper>
  );
};

export default Detail;
