import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import Users from "./modules/infoUsers/reducers";
import GetUser from "./modules/requestUser/reducers";

const reducers = combineReducers({
  Users,
  GetUser,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
