import React, { Component } from "react";
import Endpoint from "./Endpoint";

class EndpointContainer extends Component {
  render() {
    return (
      <div>
        {this.props.endpoints.map((endpoint) => (
          <Endpoint endpoint={endpoint} />
        ))}
      </div>
    );
  }
}

export default EndpointContainer;
