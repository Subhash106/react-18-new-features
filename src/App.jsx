import { Suspense, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Albums from "./components/albums";
import Counter from "./components/counter";
import Header from "./components/header";
import Home from "./components/home";
import Layout from "./components/layout";
import Photos from "./components/photos";
import Posts from "./components/posts";
import Todos from "./components/todos";
import Post from "./components/posts/post";
import ClassicalRedux from "./components/classicalRedux";
import MusicPlayer from "./components/musicPlayerNew/MusicContainer";
import Login from "./components/authentication/Login";
import Events from "./components/events";
import SecureRoute from "./components/authentication/SecureRoute";
import { useAuthContext } from "./components/authentication/AuthContext";
import { logout } from "./utils/auth";

export default function App() {
  const { expirationDuration, token } = useAuthContext();

  useEffect(() => {
    if (!token) return;
    if (expirationDuration !== "EXPIRED") {
      setTimeout(logout, expirationDuration);
    } else {
      logout();
    }
  }, []);

  return (
    <Layout>
      <Header />
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/counter" component={Counter} />
          <Route path="/albums" component={Albums} />
          <Route path="/posts/:postId" component={Post} />
          <Route path="/posts" component={Posts} />
          <Route path="/photos" component={Photos} />
          <Route path="/todos" component={Todos} />
          <Route path="/classical-redux" component={ClassicalRedux} />
          <Route path="/music-player" component={MusicPlayer} />
          <Route path="/login" component={Login} />
          <SecureRoute>
            <Route path="/events" component={Events} />
          </SecureRoute>
        </Switch>
      </Suspense>
    </Layout>
  );
}
