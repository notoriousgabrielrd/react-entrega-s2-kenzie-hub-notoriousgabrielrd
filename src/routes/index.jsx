import { Switch, Route } from "react-router-dom";
import Login from "../Pages/login/index";
import Dashboard from "../Pages/dashboard/index";
import Cadastro from "../Pages/cadastro/index";
import { useState } from "react";

const Routes = () => {
  const [infoUser, setInfoUser] = useState({});

  return (
    <Switch>
      <Route exact path="/">
        <Login setData={setInfoUser} />
      </Route>
      <Route path="/dashboard">
        <Dashboard dataUser={infoUser} />
      </Route>
      <Route path="/cadastro">
        <Cadastro />
      </Route>
    </Switch>
  );
};

export default Routes;
