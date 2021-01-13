import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import Users from "./modules/infoUsers/reducers";

const reducers = combineReducers({
  Users,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
