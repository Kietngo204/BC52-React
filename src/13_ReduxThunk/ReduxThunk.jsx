import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../redux/slices/postSlice";
// import { getPosts } from "../redux/actions/postActions";

export default function ReduxThunk() {
  const dispatch = useDispatch();
  const { posts, isLoading } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <h1>ReduxThunk</h1>

      <ul>
        {posts.map((post) => {
          return <li key={post.id}>{post.title}</li>;
        })}
      </ul>
    </div>
  );
}
