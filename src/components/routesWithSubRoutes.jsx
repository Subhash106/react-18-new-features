import { Route } from "react-router-dom";

function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={(props) => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} {...route.routes} />
      )}
    />
  );
}

export default RouteWithSubRoutes;
