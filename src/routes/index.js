/* eslint-disable react-hooks/exhaustive-deps */
import { Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { handleUsersThunk } from "../store/modules/infoUsers/thunks";
import Header from "../components/Header";
import Home from "../pages/Home";
import UserPage from "../pages/UserPage";
import { AnimatePresence } from "framer-motion";

const Routes = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleUsersThunk(1));
  }, []);

  return (
    <>
      <AnimatePresence key="animates">
        <Header key="header" />
        <Switch>
          <Route exact path="/" component={Home} key="home" />
          <Route exact path="/user/:id" component={UserPage} key="userpage" />
        </Switch>
      </AnimatePresence>
    </>
  );
};

export default Routes;
