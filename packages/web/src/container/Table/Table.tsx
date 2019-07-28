import { connect } from "react-redux";

import Table from "components/Table";
import { getAnswersSelector } from "store/reducers/answers/selectors";
import { getUserSelector } from "store/reducers/user/selectors";
import { AppState } from "store/store.type";

const mapStateToProps = (state: AppState) => ({
  answers: getAnswersSelector(state),
  user: getUserSelector(state)
});

export default connect(mapStateToProps)(Table);
