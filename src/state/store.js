import randomJokeReducer from "./reducers";
import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const rootReducer = combineReducers({ randomJokeReducer });

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
