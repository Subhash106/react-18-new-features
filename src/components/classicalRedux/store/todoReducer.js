import { TODOS_SUCCESS, INITIATE_TODOS, TODOS_FAILED } from "./actions";

const initialState = {
  status: "idle",
  todos: [],
  error: "",
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIATE_TODOS:
      return { ...state, status: "loading" };
    case TODOS_SUCCESS:
      return { ...state, status: "idle", todos: action.todos };
    case TODOS_FAILED:
      return { ...state, status: "idle", error: action.error };
    default:
      return state;
  }
};

export default todosReducer;
