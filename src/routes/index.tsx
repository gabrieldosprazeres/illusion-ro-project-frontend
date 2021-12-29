import { Routes as Switch, Route } from "react-router-dom";
import { Home } from "../pages/home";
import { Login } from "../pages/login";

export const Routes = () => {
  return (
    <Switch>
      <Route path="/" element={<Home />} />
      <Route path="/loginadm" element={<Login />} />
    </Switch>
  );
};
