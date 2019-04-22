import {
  GET_YOUTUBE_VIDEOS,
  VIDEO_LOADING,
  GET_YOUTUBE_VIDEO_BY_LINK
} from "../actions/types";

const initialState = {
  youtubeVideos: [],
  youtubeVideo: {},
  yt: {},
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case VIDEO_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_YOUTUBE_VIDEOS:
      return {
        ...state,
        youtubeVideos: action.payload,
        loading: false
      };
    case GET_YOUTUBE_VIDEO_BY_LINK:
      return {
        ...state,
        yt: action.payload,
        loading: false
      };
    default:
      return state;
  }
}
