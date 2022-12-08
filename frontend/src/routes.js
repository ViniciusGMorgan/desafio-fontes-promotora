import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Sidebar from "./components/sidebar/Sidebar";
import { Auth } from "./config/storage";
import Pages from "./routes/pages";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isOpen = false;

  return (
    <Route
      {...rest}
      render={(props) =>
        sessionStorage.getItem(Auth) != null ? (
          <div className="routeMain">
            <Sidebar />
            <div
              className={`routerContainer ${isOpen ? "menuOpen" : "menuClose"}`}
            >
              <div style={{ height: "100%" }}>
                <Component {...props} />
              </div>
            </div>
          </div>
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

const Routes = (props) => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register}></Route>
      {Pages.map((page) => {
        return (
          <PrivateRoute
            exact
            key={page.name}
            path={page.route}
            component={page.component}
          />
        );
      })}
    </Switch>
  );
};

export default Routes;
