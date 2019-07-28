import { getAnswers } from "store/reducers/answers/actions";
import { fetchUser } from "store/reducers/user/actions";

export interface AppProps {
  fetchUser: typeof fetchUser;
  getAnswers: typeof getAnswers;
}
