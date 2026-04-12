import React, { Component, useState } from 'react';

function Sample(props) {
  const [name, setName] = useState("Devendra");
  const [age, setAge] = useState(20);

  return (
    <div>
      <h2>Trending topics</h2>
      <p>Lorem ipsum sit amet consectetur elit. Rem que...</p>

      <h3>{name}</h3>

      <button onClick={() => {
        setName("Alex");
      }}>
        Name Change
      </button>

      <button
        className="counter"
        onClick={() => props.setCount((c) => c + 1)}
      >
        Count is {props.count}
      </button>
    </div>
  );
}

export default Sample;