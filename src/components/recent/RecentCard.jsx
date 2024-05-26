import React from "react"
import { useState, useEffect } from 'react';

const RecentCard = () => {
    // State to store fetched data
    const [apartments, setApartments] = useState([]);
  
    // Fetch data when the component mounts
    useEffect(() => {
      fetch('https://broker-system.azurewebsites.net/apartment/getAll')
        .then((response) => response.json())
        .then((data) => {
          setApartments(data);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }, []);

  return (
    <>
      <div className='content grid3 mtop'>
      {apartments.map((val, index) => {
          const { id, rooms, area, floor, district ,imgUrl} = val;
          return (
            <div className='box shadow' key={index}>
              <div className='img'>
                <img src={process.env.PUBLIC_URL + imgUrl}alt='' />
              </div>
              <div className='text'>
                <div className='category flex'>
                </div>
                <h4>Rooms Count:{rooms}</h4>
                <h4>Area: {area}</h4>
                <h4>Floor: {floor}</h4>
                <p>
                  <h4></h4>
                  <i className='fa fa-location-dot'></i> District:{district}
                  
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default RecentCard
