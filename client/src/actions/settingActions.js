import axios from "axios";
import { GET_SETTINGS, UPDATE_SETTINGS, GET_ERRORS } from "./types";

export const getSettings = () => (dispatch, getState) => {
  const state = getState();
  const { user } = state.auth.user;

  axios
    .get("api/settings", user)
    .then(res =>
      dispatch({
        type: GET_SETTINGS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const updateSettings = data => (dispatch, getState) => {
  const state = getState();
  const { settingsId } = state.auth.user;
  console.log('settings id',settingsId);
  axios
    .post(`api/settings/update/${settingsId}`, data)
    .then(res =>
      dispatch({
        type: UPDATE_SETTINGS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: null
      })
    );
};
