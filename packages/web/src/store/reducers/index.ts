import { combineReducers } from "redux";

import answers from "store/reducers/answers/reducer";
import user from "store/reducers/user/reducer";

export default combineReducers({ user, answers });
