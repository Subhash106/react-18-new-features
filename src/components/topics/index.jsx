import { Link, useRouteMatch, Switch, Route, Prompt } from "react-router-dom";
import Topic from "./topic";

const Topics = () => {
  const match = useRouteMatch();
  return (
    <>
      <Prompt message="Are you sure you want to leave the page?" />
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/state-vs-props`}>State vs Props</Link>
        </li>
      </ul>

      <Switch>
        <Route path={`${match.url}/:topicId`}>
          <Topic />
        </Route>
      </Switch>
    </>
  );
};

export default Topics;
