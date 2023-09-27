import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";

// Hàm call API getPosts
const getPosts = async (userId) => {
  try {
    const response = await axios.get(
      `https://64a6ad14096b3f0fcc8042cd.mockapi.io/posts`,
      {
        params: {
          userId: userId || undefined,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Hàm call API delete post
const deletePost = async (postsId) => {
  try {
    const response = await axios.delete(
      `https://64a6ad14096b3f0fcc8042cd.mockapi.io/posts/${postsId}`
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
export default function ReactQuery() {
  const [userId, setUserId] = useState("");
  const queryClient = useQueryClient();

  const {
    data = [],
    error,
    isLoading,
  } = useQuery({
    queryKey: ["posts", userId],
    queryFn: () => getPosts(userId),
  });

  const { mutate: handleDeletePost } = useMutation({
    mutationFn: (postId) => deletePost(postId),
    onSuccess: () => {
      // Vô hiệu hoá queryKey của posts để gọi lại API getPosts
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });

  if (isLoading) {
    return <h1>Loading ...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  const handleChangeUserId = (event) => {
    const { value } = event.target;
    setUserId(value);
  };
  return (
    <div>
      <h1>ReactQuery</h1>
      <select value={userId} onChange={handleChangeUserId}>
        <option value={1}>User 1</option>
        <option value={2}>User 2</option>
        <option value={3}>User 3</option>
        <option value={4}>User 4</option>
        <option value={5}>User 5</option>
        <option value={6}>User 6</option>
        <option value={7}>User 7</option>
        <option value={8}>User 8</option>
        <option value={9}>User 9</option>
        <option value={10}>User 10</option>
      </select>
      <ul>
        {data.map((item) => {
          return (
            <li key={item.id}>
              <span className="me-2">{item.title}</span>
              <button
                onClick={() => {
                  handleDeletePost(item.id);
                }}
              >
                X
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
