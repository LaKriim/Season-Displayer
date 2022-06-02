import React from "react";
import ReactDOM from "react-dom";
import SaisonDisplay from "./SaisonDisplay";
import Loader from "./Loader";
class App extends React.Component {
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }
  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SaisonDisplay lat={this.state.lat} />;
    }

    return (
      <div>
        <Loader message="please accept location request" />
      </div>
    );
  }
  // React says we have to define render!!
  render() {
    return <div>{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
