import About from "./about";
import Home from "./home";
import Login from "./login";
import Topics from "./topics";
import Topic from "./topics/topic";

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  {
    path: "/topics",
    component: Topics,
    routes: [{ path: "/topics/:topicId", component: Topic }],
  },
  { path: "/login", component: Login },
];

export default routes;
