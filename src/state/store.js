import { randomJokeReducer, customJokeReducer } from "./reducers";
import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  random: randomJokeReducer,
  custom: customJokeReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
