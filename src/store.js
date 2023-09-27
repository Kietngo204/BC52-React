import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./redux/reducers/counterReducer";
import todosReducer from "./redux/reducers/todosReducer";
// import busTicketReducer from "./redux/reducers/busTicketReducer";
// import postReducer from "./redux/reducers/postReducer";
import busTicketReducer from "./redux/slices/busTicketSlice";
import postSlice from "./redux/slices/postSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todosReducer,
    busTicket: busTicketReducer,
    post: postSlice,
  },
});

/*************************   DEMO     *****************************/
console.log("Store:", store.getState());

// store.subscribe(() => {
//   console.log("State sau khi thay đổi:", store.getState());
// });

// const action = { type: "increase" };
// store.dispatch(action);

// store.dispatch({ type: "decrease" });

// store.dispatch({ type: "increaseByAmount", payload: 10 });

export default store;
