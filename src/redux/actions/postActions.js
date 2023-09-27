import axios from "axios";
import {
  GET_POST_FULFILLED,
  GET_POST_PENDING,
  GET_POST_REJECTED,
} from "../constants/postConstants";

// export const getPosts = (posts) => {
//   return {
//     type: GET_POST,
//     payload: posts,
//   };
// };

export const getPosts = () => {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: GET_POST_PENDING });
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts`
      );
      dispatch({ type: GET_POST_FULFILLED, payload: response.data });
    } catch (error) {
      dispatch({ type: GET_POST_REJECTED, error: error.response.data });
    }
  };
};
