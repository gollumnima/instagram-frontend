import React from "react";
import { useSelector } from "react-redux";

const SaveList = props => {
  const saves = useSelector(state => state?.save?.savedList);

  return (
    <div className="mypage-feed-container">
      <div className="my-card-wrapper">
        {saves?.map(post => (
          <>
            <section
              className="my-img-card"
              key={post?.images[0]?.post_id}
              style={{ backgroundImage: `url(${post?.images[0]?.url})` }}
            >
              {post?.images[0]?.url && (
                <div className="overlay" key={`${post.image}-overlay`}>
                  <span
                    className="delete-x"
                    //onClick={() => dispatch(deletePost(post.id))}
                  >
                    X
                  </span>
                  <ul className="overlay-flex" key={`${post.image}-shadow`}>
                    <li key={`${post.image}-heart`}>
                      ♥︎ {post.Likes?.length || 0}
                    </li>
                    <li key={`${post.image}-comment`}>
                      ☁︎ {post.Comments?.length || 0}
                    </li>
                  </ul>
                </div>
              )}
            </section>
          </>
        ))}
      </div>
    </div>
  );
};
export default SaveList;
