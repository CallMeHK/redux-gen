import React from "react";
import { StateArray, State } from "../index";

export interface AllProps {
  state: StateArray;
}
const DisplayActions: React.FC<AllProps> = ({ state }) => {
  const actionsList = state.map(rx => rx.key.charAt(0).toUpperCase() + rx.key.slice(1))
    .slice(0, -1);
  const actionsFoot: string = `  
export { ${actionsList.map((elt: string) => `set${elt}`).join(`, `)} }`;
  const actions: Array<string> = actionsList.map(
    (name: string) =>
      `
const set${name} = ${name.toLowerCase()} => dispatch => {
  dispatch({
    type: "set-${name.toLowerCase()}",
    payload: ${name.toLowerCase()}
  });
};
      `
  );

  return (
    <div>
      <div>actions.js</div>
      <div style={{ whiteSpace: "pre-wrap" }} className="code-block">
        {actions.join("") + actionsFoot}
      </div>
    </div>
  );
};

export default DisplayActions;
