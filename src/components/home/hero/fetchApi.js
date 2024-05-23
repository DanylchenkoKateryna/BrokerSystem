import { useState } from 'react';

export default function Hero() {
  // Define state variables to store input values
  const [count, setCount] = useState('');
  const [floor, setFloor] = useState('');
  const [area, setArea] = useState('');

  // Define the function to handle the search action
  const handleSearch = () => {
    console.log('good');
    console.log(count);

    // Define the URL and payload for the fetch request
    const url = 'http://localhost:8080/apartment/search';
    const payload = {
      rooms: count,
      area: area,
      floor: floor,
      district: null
    };

    // Make the fetch request
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(payload)
    })
      .then(res => res.json())
      .then(data => {
        const dataArray = [];
        dataArray.push(data);
        console.log(count);
        // Render or process the fetched data
      })
      .catch(error => {
        console.error('Error:', error);
      });
      return { count,area, floor };
  };
}