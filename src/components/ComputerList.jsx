import React, { useState } from 'react';
import ComputerParts from './ComputerParts.jsx';

function ComputerList({ props, setPart, setPrice }) {
  const handleUpdate = (e) => {
    e.preventDefault();
    // console.log(e.target[0].value);
    // console.log(e.target[1].value);
    fetch('http://localhost:3000/', {
      method: 'PUT',
      header: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({ part: e.target[0].value, price: e.target[1].value })
      .then((data) => console.log(data))
    });
    // setPart(props = e.target[0].value);
    // setPrice(props = e.target[1].value);
  };

  return (
    <div>
      <h1>Computer List</h1>
      {props.map((el, i) => (
        <ComputerParts
          key={i}
          part={el.part}
          price={el.price}
          handleUpdate={handleUpdate}
          setPart={setPart}
          setPrice={setPrice}
        />
      ))}
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
