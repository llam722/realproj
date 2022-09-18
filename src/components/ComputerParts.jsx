import React from 'react';
import { FaTimes } from 'react-icons/fa';

function ComputerParts({ _id, part, price, setPart, setPrice, handleDelete }) {
  const handleUpdate = (e) => {
    e.preventDefault();
    // console.log(e);
    console.log('update', _id, e.target[0].value, e.target[1].value);
    // console.log('update', _id, price, part);
    //PARAMS IN BACKEND PASSING IN UNDEFINED..
    fetch(
      `api/?_id=${_id}&part=${e.target[0].value}&price=${e.target[1].value}`,
      {
        method: 'PATCH',
        header: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          _id: _id,
          part: e.target[0].value,
          price: e.target[1].value,
        }),
      }
    )
      .then((data) => data.json())
      .then((res) => {
        console.log('res', res);
      });
  };

  return (
    <div>
      <h3>
        {part} {price}
      </h3>
      <button onClick={() => handleDelete(_id)}>
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
