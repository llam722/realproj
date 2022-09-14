import React, { Component, useState } from 'react';
import ComputerParts from './ComputerParts.jsx';



function ComputerList() {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     parts: ['Mobo', 'SSD', 'RAM'],
  //   };
  // }
  // render() {
    const [parts, setParts] = useState([0])

    const components = [];
    for (let i = 0; i < this.state.parts.length; i++) {
      components.push(<ComputerParts key={i} part={this.state.parts[i]} />);
    }
    return (
      <div>
        <h1>Computer List</h1>
        {components}
      </div>
    );
  // }
}

export default ComputerList;
