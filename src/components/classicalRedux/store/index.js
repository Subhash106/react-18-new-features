import { applyMiddleware, combineReducers, createStore } from "redux";
import todosReducer from "./todoReducer";
import postsReducer from "./postsReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  todos: todosReducer,
  posts: postsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
