import {
  SET_RANDOM_JOKE,
  SET_FIRST_NAME,
  SET_LAST_NAME,
  SET_CUSTOM_JOKE,
} from "./actions";

const randomJokeState = {
  randomJoke: "",
};

const customJokeState = {
  customJoke: "",
  firstName: "",
  lastName: "",
};

const initialState = {
  randomJoke: "",
  customJoke: "",
  firstName: "",
  lastName: "",
};

export const randomJokeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_RANDOM_JOKE:
      return { ...state, randomJoke: action.payload };
    default:
      return state;
  }
};

export const customJokeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CUSTOM_JOKE:
      return { ...state, customJoke: action.payload };
    case SET_FIRST_NAME:
      return { ...state, firstName: action.payload };
    case SET_LAST_NAME:
      return { ...state, lastName: action.payload };
    default:
      return state;
  }
};
