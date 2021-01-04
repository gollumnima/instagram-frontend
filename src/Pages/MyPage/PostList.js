import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { getPost, getPosts, deletePost } from "store/post";
import "./postlist.scss";

const PostList = () => {
  const dispatch = useDispatch();
  const postList = useSelector(state => state?.post?.postList) ?? [];

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  const location = useLocation();

  return (
    <div className="feed__container">
      <div className="feed__card__wrapper">
        {postList?.map(post => (
          <>
            <Link
              to={{
                pathname: `/p/${post.id}`,
                state: { background: location }
              }}
            >
              <section
                className="feed__card__img"
                key={post?.images[0]?.post_id}
                style={{ backgroundImage: `url(${post?.images[0]?.url})` }}
              >
                {post?.images[0]?.url && (
                  <div className="overlay" key={`${post.image}-overlay`}>
                    <span
                      className="delete-x"
                      onClick={() => dispatch(deletePost(post.id))}
                    >
                      X
                    </span>
                    <ul className="overlay__flex" key={`${post.image}-shadow`}>
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
            </Link>
          </>
        ))}
      </div>
    </div>
  );
};

export default PostList;
