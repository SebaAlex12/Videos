import { GET_SETTINGS, UPDATE_SETTINGS } from "../actions/types";

const initialState = {
  settings: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_SETTINGS:
      return {
        ...state,
        settings: action.payload
      };
    case UPDATE_SETTINGS:
      return {
        ...state,
        settings: [
          action.payload,
          ...state.settings.filter(
            setting => setting.userId !== action.payload._id
          )
        ]
      };
    default:
      return state;
  }
}
