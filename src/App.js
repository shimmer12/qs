import React, { useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import Content from './Content'; // Import the new Content component

function App() {
  const [Grouping, setGrouping] = useState(localStorage.getItem('grouping'));
  const [Order, setOrder] = useState(localStorage.getItem('order'));

  const setGroupingValue = (newValue) => {
    if (newValue === 'status' || newValue === 'priority' || newValue === 'user') {
      setGrouping(newValue);
    } else {
      console.error('Invalid grouping value provided:', newValue);
    }
  };

  const setOrderingValue = (newValue) => {
    if (newValue === 'Priority' || newValue === 'Title') {
      setOrder(newValue);
    } else {
      console.error('Invalid ordering value provided:', newValue);
    }
  };

  return (
    <div className='fullBody'>
      <Navbar order={Order} grouping={Grouping} setGroupingValue={setGroupingValue} setOrderingValue={setOrderingValue} />
      <Content grouping={Grouping} order={Order} /> {/* Use the Content component */}
    </div>
  );
}

export default App;
