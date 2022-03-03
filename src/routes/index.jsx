import { Switch, Route } from "react-router-dom";
import Login from "../Pages/login/index";
import Dashboard from "../Pages/dashboard/index";
import Cadastro from "../Pages/cadastro/index";
const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
      <Route path="/cadastro">
        <Cadastro />
      </Route>
    </Switch>
  );
};

export default Routes;
