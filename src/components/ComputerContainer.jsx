import React, { useEffect, useState } from 'react';
import ComputerCreator from './ComputerCreator.jsx';
import ComputerList from './ComputerList.jsx';
import axios from 'axios';

function ComputerContainer() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch('/');
      const data = await response.json();
      return data;
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e);
    setData([...data, { part: e.target[0].value, price: e.target[1].value }]);
  };

  return (
    <div>
      <h2>Computer Container</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add a new part..."
          minLength="2"
        ></input>
        <input type="number" placeholder="Add a price..." minLength="1"></input>
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
