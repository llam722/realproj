import React, { Component } from 'react';
import ComputerParts from './ComputerParts.jsx';

class ComputerList extends Component {
  constructor() {
    super();
    this.state = {
      parts: [],
    };
  }

  render() {
    return (
      <div>
        <h1>Computer List</h1>
        {this.state.parts.map((parts, i) => {
          return <ComputerParts key={`Part${i}`} parts={parts} />;
        })}
      </div>
    );
  }
}

export default ComputerList;
