import { Switch, Route } from "react-router-dom";
import Login from "../Pages/login/index";
import Dashboard from "../Pages/dashboard/index";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
    </Switch>
  );
};

export default Routes;
