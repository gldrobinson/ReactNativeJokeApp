import { SET_RANDOM_JOKE } from "./actions";

const initialState = {
  randomJoke: "",
};

const randomJokeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_RANDOM_JOKE:
      return { ...state, randomJoke: action.payload };
    default:
      return state;
  }
};

export default randomJokeReducer;
