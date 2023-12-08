// components/Counter.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Counter = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.data);
  const ui = useSelector((state) => state.ui);
  const store = useSelector((state) => state)
  console.log('this is niraj ', store)

  const handleIncrement = () => {
    dispatch({ type: 'INCREMENT' });
  };

  return (
    <div>
      <h2>Counter: {data.value}</h2>
      <p>UI Status: {ui.status}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};

export default Counter;
