import { SET_YOUTUBE_SEARCHER_PARAMS } from "./types";

export const setYoutubeSearcher = data => dispatch => {
  dispatch({
    type: SET_YOUTUBE_SEARCHER_PARAMS,
    payload: data
  });
};
