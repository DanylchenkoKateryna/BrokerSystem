import React from "react"
import Heading from "../../common/Heading"
import "./hero.css"
import { useState } from 'react';

export default function Search() {
  // Define state variables to store input values
  const [count, setCount] = useState('');
  const [floor, setFloor] = useState('');
  const [area, setArea] = useState('');
  const [district, setDistrict] = useState('');
  const [url, setUrl] = useState('');

  // Define the function to handle the search action
  const handleSearch = () => {
    console.log('good1');
    console.log(count);

    // Define the URL and payload for the fetch request
    const url = 'https://broker-system.azurewebsites.net/apartment/search';
    const payload = {
      rooms: count,
      area: area,
      floor: floor,
      district: district,
      imgUrl:"/p-1.png"
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
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <>
      <section className='hero'>
        <div className='container'>
          <Heading title='Знайди свою домівку' subtitle='Знайдіть нову нерухомість у своєму місті.' />

          <form className='flex'>
            <div className='box'>
              <span>Кількість кімнат</span>
              <input className='count' type="text"
        value={count}
        onChange={e => setCount(e.target.value)}
        placeholder="Кількість" />
            </div>
            <div className='box'>
              <span>Поверх</span>
              <input className='floor' type="text"
        value={floor}
        onChange={e => setFloor(e.target.value)}
        placeholder="Поверх"/>
            </div>
            <div className='box'>
              <span>Площа</span>
              <input className='area' type="text"
        value={area}
        onChange={e => setArea(e.target.value)}
        placeholder="Площа" />
            </div>
            <div className='box'>
              <span>Район</span>
              <input className='district' type="text"
        value={district}
        onChange={e => setDistrict(e.target.value)}
        placeholder="Район" />
            </div>
            <div className='box'>
              <h4>Фільтр</h4>
            </div>
            <button className='btn1' onClick={handleSearch}>
              <i className='fa fa-search'></i>
            </button>
          </form>
        </div>
      </section>
    </>
    
  )
}
