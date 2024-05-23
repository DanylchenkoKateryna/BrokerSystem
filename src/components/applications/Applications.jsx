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
    };

    // Send data to backend
    fetch('http://localhost:8080/apartment/add', {
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
      <h1>Add Apartment</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Rooms:
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
            Floor:
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
            Area (sqm):
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
            District:
            <input
              type="text"
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
              required
            />
          </label>
        </div>
        <button type="submit">Save Apartment</button>
      </form>
    </div>
    </section>
    </>
  );
};

export default Applications;
