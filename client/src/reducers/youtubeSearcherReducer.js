import { SET_YOUTUBE_SEARCHER_PARAMS } from "../actions/types";

const initialState = {
  youtubeSearch: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_YOUTUBE_SEARCHER_PARAMS:
      return {
        youtubeSearch: action.payload
      };
    default:
      return state;
  }
}
