import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { linkReducer } from "./links/reducers";
import logger from "redux-logger";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    linkStore: linkReducer,
  });

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  export const storeRedux = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk), applyMiddleware(logger))
  );