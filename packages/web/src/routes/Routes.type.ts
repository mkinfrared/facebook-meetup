import { RouteComponentProps } from "react-router";
import { getUserSelector } from "store/reducers/user/selectors";

export interface RoutesProps extends RouteComponentProps {
  user: ReturnType<typeof getUserSelector>;
}
