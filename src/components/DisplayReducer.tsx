import React from "react";
import { StateArray, State } from "../index";

export interface AllProps {
  state: StateArray;
}
const DisplayReducer: React.FC<AllProps> = ({ state }) => {
  const reducerState = state.map(
      (rx: State) => `
            ${rx.key}: ${rx.value},`
    )
    .slice(0, -1)
    .join("");
  const reducerHead: string = `
const reducer = 
  (state = { ${reducerState}
            }, 
  action) => {
    switch (action.type) {`;
  const reducerFoot: string = `  
    default:
      return state;
  }
};

export default reducer`;
const reducer: Array<string> = state.map(
      (rx: State) =>
        `
      case "set-${rx.key}":
        return {
          ...state,
          ${rx.key}: action.payload 
        };`
    )
    .slice(0, -1);

  return (
    <div>
      <div>reducer.js</div>
      <div style={{ whiteSpace: "pre-wrap" }} className="code-block">
        {reducerHead + reducer.join("") + reducerFoot}
      </div>
    </div>
  );
};

export default DisplayReducer;
