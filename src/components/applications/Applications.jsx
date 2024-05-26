import React, { useState } from 'react';

const Applications = () => {
  // State variables to store input values
  const [rooms, setRooms] = useState('');
  const [floor, setFloor] = useState('');
  const [area, setArea] = useState('');
  const [district, setDistrict] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create payload from state variables
    const payload = {
      rooms,
      floor,
      area,
      district,
      imgUrl:"/p-1.png"
    };

    // Send data to backend
    fetch('https://broker-system.azurewebsites.net/apartment/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        // Clear form fields after submission
        setRooms('');
        setFloor('');
        setArea('');
        setDistrict('');
      })
  };

  return (
    <>
      <section className='recent padding'>
    <div>
      <h1>Додати квартиру</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Кількість кімнат:
            <input
              type="number"
              value={rooms}
              onChange={(e) => setRooms(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Поверх:
            <input
              type="number"
              value={floor}
              onChange={(e) => setFloor(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Площа:
            <input
              type="number"
              value={area}
              onChange={(e) => setArea(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Район:
            <input
              type="text"
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
              required
            />
          </label>
        </div>
        <button type="submit">Зберегти</button>
      </form>
    </div>
    </section>
    </>
  );
};

export default Applications;
