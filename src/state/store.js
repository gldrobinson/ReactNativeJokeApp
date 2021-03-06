import {
  randomJokeReducer,
  customJokeReducer,
  multipleJokesReducer,
} from "./reducers";
import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  random: randomJokeReducer,
  custom: customJokeReducer,
  multiple: multipleJokesReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
