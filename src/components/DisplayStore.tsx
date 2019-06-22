import React from "react";

const DisplayStore: React.FC = () => (
  <div>
    <div>store.js</div>
    <div style={{ whiteSpace: "pre-wrap" }} className="code-block">
      {`
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";

export default function configureStore(initialState = {}) {
  return createStore(rootReducer, initialState, applyMiddleware(thunk));
}`}
    </div>
  </div>
);

export default React.memo(DisplayStore);
