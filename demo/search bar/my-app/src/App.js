import React from "react";

import "./App.css";

import EndpointContainer from "./EndpointContainer";
import parse from "./yaml_parser";

class App extends React.Component {
  state = parse()
  // DATA Model:
  // endpoints = [
  // {name: "operation1", type: "get", desc : "does operation1 things"},
  // {name: "operation2", type: "post", desc : "does operation2 things"},
  // {name: "operation3", type: "del", desc : "does operation3 things"},
  // {name: "operation4", type: "get", desc : "does operation4 things"}
  // ]

  editSearchTerm = (e) => {
    this.setState({
      searchTerm: e.target.value,
    });
  };

  dynamicSearch = () => {
    return this.state.endpoints.filter((name) =>
      name.id.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    );
  };

  render() {
    return (
      <div
        style={{
          textAlign: "center",
          paddingTop: "30vh",
        }}
      >
        <h3> Search here for an operation: </h3>
        <input
          type="text"
          value={this.state.searchTerm}
          onChange={this.editSearchTerm}
          placeholder="Search for an API component!"
        />
        <EndpointContainer endpoints={this.dynamicSearch()} />
      </div>
    );
  }
}

export default App;
