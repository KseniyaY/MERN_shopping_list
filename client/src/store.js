import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //a piece of code for Redux Dev tool briwser extension to avoid browser errors

const initialState = {};

const middleWare = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancer(applyMiddleware(...middleWare))
);

export default store;
