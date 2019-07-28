import { getAnswersSelector } from "store/reducers/answers/selectors";
import { getUserSelector } from "store/reducers/user/selectors";

export interface TableProps {
  answers: ReturnType<typeof getAnswersSelector>;
  user: ReturnType<typeof getUserSelector>;
}

export interface TableState {
  inputValue: string;
}
