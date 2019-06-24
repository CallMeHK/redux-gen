import React, { useState } from "react";
import { render } from "react-dom";
import Instructions from "./components/Instructions";
import HowToUse from "./components/HowToUse";
import DisplayActions from "./components/DisplayActions";
import DisplayReducer from "./components/DisplayReducer";
import DisplayCombineReducer from "./components/DisplayCombineReducer";
import DisplayStore from "./components/DisplayStore";
import DisplayIndex from "./components/DisplayIndex";

import "./styles.css";

export interface State {
  key: string;
  value: string;
}

export type StateArray = State[]

const App: React.FC = () => {
  const [state, setState] = useState<StateArray>([
    { key: "word", value: `"yo"` },
    { key: "count", value: `1` },
    { key: "", value: "" }
  ]);

  const changeKey = (e: any, i: number) => {
    e.persist();
    let addBlank: boolean = false;
    if (state[i].key === "") {
      addBlank = true;
    }
    setState(elt => {
      let inputs = elt.map((melt, j) =>
        i === j
          ? {
              key: e.target.value,
              value: melt.value
            }
          : melt
      );
      return addBlank ? [...inputs, { key: "", value: "" }] : inputs;
    });
  };

  const changeVal = (e: any, i: number) => {
    e.persist();
    if (state[i].key !== "") {
      setState(elt =>
        elt.map((melt, j) =>
          i === j
            ? {
                key: melt.key,
                value: e.target.value
              }
            : melt
        )
      );
    }
  };
  const inputs: any = state.map((st, i) => (
    <div key={"stateInput" + i}>
      <input value={st.key} onChange={e => changeKey(e, i)} />:{" "}
      <input value={st.value} onChange={e => changeVal(e, i)} />
    </div>
  ))
  return (
    <div className="container-wrapper">
      <div className="container">
        <Instructions />
        <p>Fill out the form below to generate your starting state:</p>
        <div className="code-block">
          {`state = {`}
          <div style={{ margin: ".5rem" }}>
            {inputs}
          </div>
          {`}`}
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", maxWidth: "1200px" }}>
          <DisplayReducer state={state} />
          <DisplayActions state={state} />
          <DisplayCombineReducer />
          <DisplayStore />
          <DisplayIndex />
          <HowToUse />
        </div>
      </div>
    </div>
  );
};

const rootElement = document.getElementById("root");
render(<App />, rootElement);
