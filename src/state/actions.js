export const SET_RANDOM_JOKE = "SET_RANDOM_JOKE";
export const SET_FIRST_NAME = "SET_FIRST_NAME";
export const SET_LAST_NAME = "SET_LAST_NAME";
export const SET_CUSTOM_JOKE = "SET_CUSTOM_JOKE";

export const setRandomJoke = (joke) => (dispatch) => {
  dispatch({
    type: SET_RANDOM_JOKE,
    payload: joke,
  });
};

export const setCustomJoke = (joke) => (dispatch) => {
  dispatch({
    type: SET_CUSTOM_JOKE,
    payload: joke,
  });
};

export const setFirstName = (firstName) => (dispatch) => {
  dispatch({
    type: SET_FIRST_NAME,
    payload: firstName,
  });
};

export const setLastName = (lastName) => (dispatch) => {
  dispatch({
    type: SET_LAST_NAME,
    payload: lastName,
  });
};
