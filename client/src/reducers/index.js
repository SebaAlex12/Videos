import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import youtubeSearcherReducer from "./youtubeSearcherReducer";
import youtubeReducer from "./youtubeReducer";
import settingReducer from "./settingReducer";
import videoReducer from "./videoReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  searcher: youtubeSearcherReducer,
  youtube: youtubeReducer,
  setting: settingReducer,
  video: videoReducer
});
