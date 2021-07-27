import { createStore, compose, applyMiddleware } from "redux";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "react-router-redux"; // 'routerMiddleware': the new way of storing route changes with redux middleware since rrV4.
import rootReducer from "../reducers";
import { persistReducer } from "redux-persist"; // redux persist to get store back after page refresh
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web and AsyncStorage for react-native

const persistConfig = {
  key: "root",
  storage
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const history = createBrowserHistory();
function configureStoreProd(initialState) {
  const reactRouterMiddleware = routerMiddleware(history);
  const middlewares = [ reactRouterMiddleware ];

  return createStore(
    persistedReducer,
    initialState,
    compose(applyMiddleware(...middlewares))
  );
}

function configureStoreDev(initialState) {
  const reactRouterMiddleware = routerMiddleware(history);
  const middlewares = [
    reduxImmutableStateInvariant(),
    reactRouterMiddleware
  ];

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(
    persistedReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
  );
}

const configureStore =
  process.env.NODE_ENV === "production"
    ? configureStoreProd
    : configureStoreDev;
const store = configureStore();

export default store;
