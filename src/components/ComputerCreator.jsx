import React, { Component } from 'react';

class ComputerCreator extends Component {
  render() {
    return (
      <div>
        <h3>Add a new part</h3>
        <form>
          <input type="text" placeholder="Add a new part..."></input>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default ComputerCreator;
