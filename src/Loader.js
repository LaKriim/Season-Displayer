import React from "react";

const Loader = (props) => {
  return (
      //code from ui semantic
    <div className="ui active inverted dimmer">
      <div className="ui text loader">
         { props.message}
      </div>
    </div>
  );
};

Loader.defaultProps = { message: "Loading"};
export default Loader;
