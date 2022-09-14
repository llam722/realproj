import React, { Component } from 'react';

class ComputerParts extends Component {
  render() {
    return (
      <div>
        <div>{this.props.parts}</div>
      </div>
    );
  }
}

export default ComputerParts;
