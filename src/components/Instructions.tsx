import React from "react";

const DisplayStore: React.FC = () => (
  <div>
    <h2>react-redux-boilerplate-gen</h2>
    <p>
      Setting up redux takes too much time. There is a lot of boilerplate code
      and it can be super obnoxious. This is a simple guide, mostly for myself,
      that I use to set up react-redux in new applications. Just create the
      folder structure, run the npm command, fill out the state, and start
      a-copyin and a-pastin. I hope you find this as useful as I did!{" "}
    </p>

    <p>Run this lovely command to install all the necessary redux basics:</p>
    <div style={{ whiteSpace: "pre-wrap" }} className="code-block">
      {`npm install redux react-redux redux-thunk`}
    </div>
    <p>Create a folder in your application with the following files: </p>
    <div style={{ whiteSpace: "pre-wrap" }} className="code-block">
      {`your-app
--redux
  --reducer.js
    actions.js
    rootReducer.js
    store.js`}
    </div>
  </div>
);

export default React.memo(DisplayStore);
