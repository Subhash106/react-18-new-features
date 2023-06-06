import { Component, useEffect, useState } from "react";

// const Posts = () => {
//   const [start, setStart] = useState(0);
//   const { isFetching, data: posts = [] } = useFetchPostsQuery(start);

//   if (isFetching) {
//     return <p>Loading...</p>;
//   }

//   //0, 10, 20

//   const nextHandler = () => {
//     setStart((start) => start + 10);
//   };

//   return (
//     <>
//       <h1>Posts</h1>
//       <ul>
//         {posts.map(({ id, title, body }) => (
//           <li key={id}>
//             <Link to={`/posts/${id}`}> {title}</Link>
//             <p>{body}</p>
//           </li>
//         ))}
//       </ul>
//       <div>
//         <button onClick={nextHandler}>next</button>
//         <button onClick={nextHandler}>next</button>
//       </div>
//     </>
//   );
// };

class Posts extends Component {
  constructor(props) {
    console.log("constructor called!");
    super(props);
    this.state = {
      query: "",
      posts: [],
      filteredPosts: [],
    };
  }

  componentDidMount() {
    console.log("componentDidMount called!");
    const loadPosts = async () => {
      const data = [
        { id: 1, title: "First post" },
        { id: 2, title: "Second custom hooks" },
        { id: 3, title: "Third hooks" },
        { id: 4, title: "Fourth post" },
        { id: 5, title: "Fifth post" },
        { id: 6, title: "Sixth custom hooks" },
        { id: 27, title: "React testing with custom hooks" },
      ];
      setTimeout(() => {
        this.setState({
          posts: data,
          filteredPosts: data,
        });
      }, 1000);
    };

    loadPosts();
  }

  shouldComponentUpdate(nextProp, nextState) {
    console.log("shouldComponentUpdate called!", nextProp, nextState);
    console.log("shouldComponentUpdate data", this.props, this.state);

    return true;
  }

  componentDidUpdate(prevProps, prevStates) {
    console.log("componentDidUpdate called!", prevProps, prevStates);
    console.log("componentDidUpdate data", this.props, this.state);

    if (this.state.query !== prevStates.query) {
      this.setState({
        filteredPosts: this.state.posts.filter((post) =>
          post.title.includes(this.state.query)
        ),
      });
    }
  }

  componentWillUnmount() {
    console.log("componentWillUnmount called!");
  }

  filterHandler(e) {
    console.log("this inside filterHandler", this);
    const {
      target: { value },
    } = e;

    this.setState({ query: value });
  }

  render() {
    console.log("render called!");
    if (!this.state.posts.length) {
      return <p>Loading...</p>;
    }

    return (
      <div>
        <h1>List of posts</h1>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "1rem",
          }}
        >
          <label htmlFor="filter">Filter posts</label>
          <input
            value={this.state.query}
            type="search"
            id="filter"
            onChange={this.filterHandler.bind(this)}
          />
        </div>
        <ul>
          {this.state.filteredPosts.map(({ id, title }) => (
            <li key={id}>{title}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Posts;
