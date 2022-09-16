import React from 'react';
import { FaTimes } from 'react-icons/fa';

function ComputerParts({
  item,
  data,
  id,
  _id,
  part,
  price,
  setPart,
  setPrice,
  handleDelete,
}) {
  const handleUpdate = (e) => {
    e.preventDefault();
    console.log(_id, part, price);
    fetch('http://localhost:3000/', {
      method: 'PATCH',
      header: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        _id,
        part,
        price,
      }),
    })
      .then((data) => data.json())
      .then((res) => {
        console.log(res);
      });
    // console.log(e);
    // setPart(e.target[0].value);
    // setPrice(e.target[1].value);
  };

  return (
    <div>
      <h3>
        {part} {price}
      </h3>
      <button onClick={(data) => handleDelete(data.id)}>
        <FaTimes />
      </button>
      <form onSubmit={handleUpdate}>
        <input
          onChange={(part) => setPart(part.target.value)}
          type="text"
          placeholder="Update Part"
          minLength="2"
        ></input>
        <input
          onChange={(price) => setPrice(price.target.value)}
          type="number"
          placeholder="Update Price"
        ></input>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default ComputerParts;
