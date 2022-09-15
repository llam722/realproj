import React, { useState } from 'react';
import ComputerParts from './ComputerParts.jsx';

function ComputerList({ props }) {
  const handleUpdate = (e) => {};
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
      <form>
        <input
          onChange={(part) => setPart(part.target.value)}
          type="text"
          placeholder="Update Part"
          minLength="2"
        ></input>
        <input
          onChange={(price) => setPart(price.target.value)}
          type="text"
          placeholder="Update Price"
          minLength="2"
        ></input>
      </form>
    </div>
  );
}

export default ComputerList;

// const [parts, setParts] = useState([0]);

// const components = [];
// for (let i = 0; i < this.state.parts.length; i++) {
//   components.push(<ComputerParts key={i} part={this.state.parts[i]} />);
// }
// console.log(props);

{
  /* {components} */
}
{
  /* <ComputerParts /> */
}
