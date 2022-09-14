import React, { Component } from 'react';

class ComputerParts extends Component {
  constructor(props) {
    super(props);
  }
  render() {

    return (
      <div>
        <h4>{this.props.part}</h4>
      </div>
    );
  }
}

export default ComputerParts;
