import React from "react";

const DisplayCombineReducer: React.FC = () => (
  <div>
    <div>rootReducer.js</div>
    <div style={{ whiteSpace: "pre-wrap" }} className="code-block">
      {`
import { combineReducers } from "redux";
import reducer from "./reducer"

export default combineReducers({
  reducer
});`}
    </div>
  </div>
);

export default React.memo(DisplayCombineReducer);
