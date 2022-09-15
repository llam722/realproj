import React, { useState } from 'react';
import ComputerParts from './ComputerParts.jsx';

function ComputerList({ props }) {
  // const [parts, setParts] = useState([0]);

  // const components = [];
  // for (let i = 0; i < this.state.parts.length; i++) {
  //   components.push(<ComputerParts key={i} part={this.state.parts[i]} />);
  // }
  console.log(props);
  return (
    <div>
      <h1>Computer List</h1>
      {props.map((el, i) => {
        return (
          <h1 key={i}>
            {el.part} {el.price}
          </h1>
        );
      })}
      {/* {components} */}
      {/* <ComputerParts /> */}
    </div>
  );
}

export default ComputerList;
