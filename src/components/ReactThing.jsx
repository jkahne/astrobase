import React from "react";

const ReactThing = (props) => {
  return (
    <>
      Hello
      {props.children}
      <div>React Thing</div>
    </>
  );
};

export default ReactThing;
