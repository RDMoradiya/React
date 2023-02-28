import React, { Component } from "react";

class ClassBasedComponent extends Component {

  render() {

    return (
      <div>
        <h1>Hello {this.props.name} Welcome to React</h1>
        <h3>This is Basic Component</h3>,
      </div>
    );
  }
}
export default ClassBasedComponent;
