import React, { useState } from 'react';
import ComputerParts from './ComputerParts.jsx';

function ComputerList({ data, setPart, setPrice, handleDelete }) {
  // const handleUpdate = (e) => {
  //   e.preventDefault();
  //     setPart(e.target[0].value);
  // setPrice(e.target[1].value);
  //   console.log(e.target[0].value);
  // };

  return (
    <div>
      <h1>Computer List</h1>
      {data.map((item, id) => (
        <ComputerParts
          data={data}
          key={id}
          item={item}
          _id={item._id}
          part={item.part}
          price={item.price}
          setPart={setPart}
          setPrice={setPrice}
          handleDelete={handleDelete}
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
