import React, { useEffect, useState } from 'react';
import ComputerCreator from './ComputerCreator.jsx';
import ComputerList from './ComputerList.jsx';

function ComputerContainer() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/')
      .then((data) => data.json())
      .then((response) => setData(response));
  }, []);

  // console.log(data);
  const [part, setPart] = useState('');
  const [price, setPrice] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = { part: part, price: price };
    fetch('http://localhost:3000/', { method: 'POST' })
      .then((data) => data.json())
      .then((response) => response);
    // setData([...data, { part: e.target[0].value, price: e.target[1].value }]);
  };

  return (
    <div>
      <h2>Computer Container</h2>
      <form onSubmit={handleSubmit}>
        <input
          oncChange={(item) => setPart(item.target.value)}
          type="text"
          placeholder="Add a new part..."
          minLength="2"
        ></input>
        <input
          oncChange={(item) => setPrice(item.target.value)}
          type="number"
          placeholder="Add a price..."
          minLength="1"
        ></input>
        <button type="submit">Submit</button>
      </form>
      <ComputerCreator />
      <button
        onClick={() => {
          if (window.confirm('Reset List?')) setData([]);
        }}
      >
        Reset
      </button>
      <h2>{data.reduce((curr, acc) => curr + Number(acc.price), 0)}</h2>
      <ComputerList props={data} />
    </div>
  );
}

export default ComputerContainer;
