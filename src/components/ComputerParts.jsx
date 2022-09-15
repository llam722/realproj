import React from 'react';

function ComputerParts({ props, part, price, handleUpdate }) {
  return (
    
    <div>
      <h3>
        {part} {price}
      </h3>
      <form onSubmit={handleUpdate}>
        <input
          onChange={(part) => setPart(part.target.value)}
          type="text"
          placeholder="Update Part"
          minLength="2"
        ></input>
        <input
          onChange={(price) => setPart(price.target.value)}
          type="number"
          placeholder="Update Price"
        ></input>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default ComputerParts;
