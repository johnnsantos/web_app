import { Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { handleUsersThunk } from "../store/modules/infoUsers/thunks";
import Header from "../components/Header";
import Home from "../pages/Home";
import UserPage from "../pages/UserPage";

const Routes = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleUsersThunk());
  });

  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/user/:id" component={UserPage} />
      </Switch>
    </>
  );
};

export default Routes;
