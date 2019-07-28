import { Answers } from "store/reducers/answers/types";
import { User } from "store/reducers/user/types";

export interface AppState {
  user: User;
  answers: Answers;
}
