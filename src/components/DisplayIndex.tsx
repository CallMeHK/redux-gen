import React from "react";

const DisplayIndex: React.FC = () => (
  <div>
    <div>index.js/main.js/where ever your app starts</div>
    <div style={{ whiteSpace: "pre-wrap" }} className="code-block">
      {`
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App"

import configureStore from "./whereEverTheStoreAt";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);`}
    </div>
  </div>
);

export default React.memo(DisplayIndex);
