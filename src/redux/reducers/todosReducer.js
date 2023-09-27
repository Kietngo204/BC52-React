const todosReducer = (state = [], action) => {
  switch (action.type) {
    case "addTodo": {
      return [...state, action.payload];
    }
    case "deleteTodo": {
      const newState = state.filter((item) => item.id !== action.payload);
      return newState;
    }
    case "completeTodo": {
      return state.map((item) => {
        if (item.id === action.payload) {
          return { ...item, isCompleted: !item.isCompleted };
        }
        return item;
      });
    }
    default:
      return state;
  }
};

export default todosReducer;
