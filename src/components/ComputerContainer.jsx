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

  const deleteFeedback = (id) => {
    if (window.confirm('Remove this item?')) {
      fetch('http://localhost:3000/', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ _id: id }),
      })
        .then((data) => data.json())
        .then((data) => {
          // return data;
          console.log(data);
        })
        .catch((err) => console.log(err));
      setData(data.filter((item) => item._id !== id));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // const request = { part: part, price: price };
    // console.log(request);
    fetch('http://localhost:3000/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ part, price }),
    })
      .then((data) => data.json())
      // .then((data) => {
      //   console.log(data);
      // })
      .catch((err) => console.log(err));
    setData([...data, { part: e.target[0].value, price: e.target[1].value }]);
  };

  return (
    <div>
      <h2>Parts and Price form</h2>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(part) => setPart(part.target.value)}
          type="text"
          placeholder="Add a new part..."
          minLength="2"
        ></input>
        <input
          onChange={(price) => setPrice(price.target.value)}
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
      <ComputerList
        data={data}
        setPart={setPart}
        setPrice={setPrice}
        handleDelete={deleteFeedback}
      />
    </div>
  );
}

export default ComputerContainer;
