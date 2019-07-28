import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import createSagaMiddleware from "redux-saga";

import reducers from "store/reducers";
import saga from "store/saga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

export default store;

sagaMiddleware.run(saga);
