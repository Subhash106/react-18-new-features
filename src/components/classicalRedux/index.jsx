import { Component } from "react";
import store from "./store";
import { connect, Provider } from "react-redux";
import Posts from "./Posts";
import Todos from "./Todos";

class ClassicalRedux extends Component {
  state = {
    type: "posts",
  };

  componentDidMount() {
    this.props.fetchPosts();
  }

  componentDidUpdate(prevProps, prevStates) {
    if (this.state.type !== prevStates.type) {
      if (this.state.type === "posts") {
        this.props.fetchPosts();
      } else {
        this.props.fetchTodos();
      }
    }
  }

  render() {
    return (
      <div>
        {console.log("todos", this.props.todos)}
        <h1>Classical Redux Example</h1>
        <p>{this.state.type}</p>
        <select
          value={this.state.type}
          onChange={(e) => this.setState({ type: e.target.value })}
        >
          <option value="posts">Posts</option>
          <option value="todos">Todos</option>
        </select>

        {this.props.posts?.length > 0 && <Posts posts={this.props.posts} />}
        {this.props.postsStatus === "loading" && <p>Posts loading...</p>}
        {this.props.postsError && <p>{this.props.postsError}</p>}
        {this.props.todos?.length > 0 && <Todos todos={this.props.todos} />}
        {this.props.todosStatus === "loading" && <p>Todos Loading...</p>}
        {this.props.todosError && <p>{this.props.todosError}</p>}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state?.posts?.posts || [],
    postsStatus: state.posts.status,
    postsError: state.posts.error,
    todos: state?.todos?.todos || [],
    todosStatus: state.todos.status,
    todosError: state.todos.error,
  };
};

const initiateFetchTodos = () => ({
  type: "INITIAT_TODOS",
});

const fetchTodosSuccess = (data) => ({
  type: "TODOS_SUCCESS",
  todos: data,
});

const fetchTodosFailed = (error) => ({
  type: "TODOS_FAILED",
  error,
});

const fetchTodos = () => {
  return (dispatch) => {
    dispatch(initiateFetchTodos());
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => {
        dispatch(fetchTodosSuccess(data));
      })
      .catch((error) => {
        dispatch(fetchTodosFailed(error.message));
      });
  };
};

const initiateFetchPosts = () => ({
  type: "INITIAT_POSTS",
});

const fetchPostsSuccess = (data) => ({
  type: "POSTS_SUCCESS",
  posts: data,
});

const fetchPostsFailed = (error) => ({
  type: "POSTS_FAILED",
  error,
});

const fetchPosts = () => {
  return (dispatch) => {
    dispatch(initiateFetchPosts());
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        dispatch(fetchPostsSuccess(data));
      })
      .catch((error) => {
        dispatch(fetchPostsFailed(error.message));
      });
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
    fetchTodos: () => dispatch(fetchTodos()),
  };
};

const ClassicalReduxHOC = connect(
  mapStateToProps,
  mapDispatchToProps
)(ClassicalRedux);

const Usage = () => {
  return (
    <Provider store={store}>
      <ClassicalReduxHOC />
    </Provider>
  );
};

export default Usage;
