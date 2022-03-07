import { Switch, Route } from "react-router-dom";
import Login from "../Pages/login/index";
import Dashboard from "../Pages/dashboard/index";
import Cadastro from "../Pages/cadastro/index";
import { useEffect, useState } from "react";

const Routes = () => {
  const [infoUser, setInfoUser] = useState({});
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("@KenzieHUB:token");
    console.log(token);
    if (token) {
      return setAuthenticated(true);
    }
  }, [authenticated]);

  return (
    <Switch>
      <Route exact path="/">
        <Login
          setData={setInfoUser}
          setAuthenticated={setAuthenticated}
          authenticated={authenticated}
        />
      </Route>
      <Route path="/dashboard">
        <Dashboard
          dataUser={infoUser}
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
        />
      </Route>
      <Route path="/cadastro">
        <Cadastro />
      </Route>
    </Switch>
  );
};

export default Routes;
