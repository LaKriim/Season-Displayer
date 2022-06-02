import React from "react";
import ReactDom from "react-dom";
//<!DOCTYPE html>

const App = () => {
    //know your current loc through an api
    window.navigator.geolocation.getCurrentPosition(
        //position param for the success and err for error
        (position) => console.log(position),
        (err) => console.log(err)
    );
  return <div> latitude:</div>;
};
ReactDom.render(<App />, document.querySelector("#root"));
