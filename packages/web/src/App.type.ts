import { fetchUser } from "store/reducers/user/actions";

export interface AppProps {
  fetchUser: typeof fetchUser;
}
