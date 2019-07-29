import { connect } from "react-redux";

import Table from "components/Table";
import { deleteAnswer } from "store/reducers/answers/actions";
import { getAnswersSelector } from "store/reducers/answers/selectors";
import { getUserSelector } from "store/reducers/user/selectors";
import { AppState } from "store/store.type";

const mapStateToProps = (state: AppState) => ({
  answers: getAnswersSelector(state),
  user: getUserSelector(state)
});

const mapDispatchToProps = {
  deleteAnswer
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Table);
