import { Answer } from "store/reducers/answers/types";
import { getUserSelector } from "store/reducers/user/selectors";
import { User } from "store/reducers/user/types";

export interface FormProps {
  user: ReturnType<typeof getUserSelector>;
  addAnswer: (answer: Answer) => void;
}

export interface FormState extends User {
  friendsQuantity: string;
  decision: string;
  modalOpen: boolean;
}
