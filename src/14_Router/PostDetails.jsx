import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function PostDetails() {
  const { id } = useParams();

  //   useEffect(() => {
  //     dispatch(getPostById(id))
  //   }, [id]);
  return (
    <div>
      <h1>PostDetails ({id})</h1>
    </div>
  );
}
