import React from "react";

const HowToUse: React.FC = () => (
  <div>
    <h2>How to use</h2>
    <p>
      Its easy to forget how to use redux in components, because its not super
      intuitive. Here is a quick example on using redux with function and class
      based components. These examples are static and do not change with the
      values set above. For a full example of this app being used to setup
      redux, check out{" "}
      <a href="https://codesandbox.io/s/test-redux-boilerplate-kejc2">
        this codesandbox
      </a>
      .
    </p>
    <div>
      Functional use
      <div
        style={{ whiteSpace: "pre-wrap", maxWidth: "720px" }}
        className="code-block"
      >
        {`
import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setWord } from "../redux/actions";

const FunctionWord = () => {
  const { word } = useSelector(state => ({
    ...state.reducer
  }));
  const dispatch = useDispatch();
  const change = useCallback(e => dispatch(setWord(e.target.value)), [
    dispatch
  ]);
  return (
    <div>
      <h3>FunctionWord</h3>
      <h4>The word currently reads "{word}".</h4>
      <div>
        <input type="text" value={word} onChange={change} />
      </div>
    </div>
  );
};

export default FunctionWord;
`}
      </div>
    </div>
    <div>
      Class use
      <div
        style={{ whiteSpace: "pre-wrap", maxWidth: "720px" }}
        className="code-block"
      >
        {`
import React, { Component } from "react";
import { connect } from "react-redux";

import { setWord } from "../redux/actions";

const mapDispatchToProps = dispatch => ({
  change: e => dispatch(setWord(e))
});

const mapStateToProps = state => ({
  ...state.reducer
});

class ClassWord extends Component {
  onChange = e => {
    e.preventDefault();
    this.props.change(e.target.value);
  };

  render() {
    return (
      <div>
        <h3>ClassWord</h3>
        <h4>The word currently reads "{this.props.word}".</h4>
        <div>
          <input type="text" value={this.props.word} onChange={this.onChange} />
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClassWord);
`}
      </div>
    </div>
  </div>
);

export default React.memo(HowToUse);
