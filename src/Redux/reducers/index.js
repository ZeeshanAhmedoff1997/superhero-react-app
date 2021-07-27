import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { sessionReducer } from "redux-react-session";
import searchReducer  from "./searchReducer";

const appReducer = combineReducers({
  routing: routerReducer,
  session: sessionReducer,
  searchData: searchReducer
});

const rootReducer = (state, action) => {
  return appReducer(state, action)
}

export default rootReducer;
