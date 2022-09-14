import React, { Component } from 'react';
import ComputerCreator from './ComputerCreator.jsx';
import ComputerList from './ComputerList.jsx';

class ComputerContainer extends Component {
  render() {
    return (
      <div>
        <h2>Computer Container</h2>
        <ComputerCreator></ComputerCreator>
        <ComputerList />
      </div>
    )
  }
}

export default ComputerContainer;