import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGreeting } from '../features/greeting/greetingSlice';

function Greeting() {
  const greeting = useSelector((store) => store.greeting);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGreeting());
  }, []);

  if (greeting.isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Random Greetings</h1>
      <p>{greeting.greeting.text}</p>
    </div>
  );
}

export default Greeting;
