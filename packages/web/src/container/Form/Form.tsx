import { connect } from "react-redux";

import Form from "components/Form";
import { addAnswer } from "store/reducers/answers/actions";
import { getAnswersSelector } from "store/reducers/answers/selectors";
import { getUserSelector } from "store/reducers/user/selectors";
import { AppState } from "store/store.type";

const mapStateToProps = (state: AppState) => ({
  user: getUserSelector(state),
  answers: getAnswersSelector(state)
});

const mapDispatchToProps = {
  addAnswer
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);
