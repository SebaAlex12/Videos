import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import youtubeReducer from "./youtubeReducer";
import settingReducer from "./settingReducer";
import videoReducer from "./videoReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  youtube: youtubeReducer,
  setting: settingReducer,
  video: videoReducer
});
