import React from "react";
import { render } from "react-dom";
import { Heading, Content } from "../../dist";

const App = () => {
  return (
    <div>
      <Heading />
      <Content />
    </div>
  );
};

render(<App />, document.getElementById("root"));
