import React, { Component } from "react";

class Endpoint extends Component {
  render() {
    let tagBackgroundColor = "";
    switch (this.props.endpoint.type.toLowerCase()) {
      case "post":
        tagBackgroundColor = "green";
        break;
      case "get":
        tagBackgroundColor = "#1165ed";
        break;
      case "del":
        tagBackgroundColor = "red";
        break;
      case "put":
        tagBackgroundColor = "#e3e314";
        break;
      default:
        tagBackgroundColor = "grey";
    }
    const tagstyle = {
      color: "white",
      backgroundColor: tagBackgroundColor,
      padding: "5px",
      fontFamily: "Arial",
      textTransform: "uppercase",
    };
    return (
      <div>
        <h3>
          <span style={tagstyle}>{this.props.endpoint.type}</span> &emsp;
          {this.props.endpoint.id}
        </h3>
        <p>{this.props.endpoint.desc}</p>
      </div>
    );
  }
}

export default Endpoint;
