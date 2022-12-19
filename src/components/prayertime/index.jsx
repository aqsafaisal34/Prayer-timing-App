import React, { useState } from 'react';
import './style.css';
import  PrayerCard from '../prayercard';


import axios from 'axios';

function PrayerTime() {
  const [city, setCity] = useState("")
  const [country, setCountry] = useState("")
  const [data,setData]=useState([]);
  const baseUrl = `http://api.aladhan.com/v1/calendarByCity?city=${city}&country=${country}&method=2&current&current`;

  let submitHandler = async (e) => {
    e.preventDefault();
    console.log("I am submit Handler")


    try {
      let response = await axios.get(baseUrl)
      console.log("response: ", response);
      setData(response.data.data)
    } catch (error) {
      console.log("error in api call: ", error);
  }
}



  return (
    <div>
      <h1>Namaz App</h1>
      <form onSubmit={submitHandler}>
        <label htmlFor='labelInput'></label> <br />
        <input
         type="text" 
         required
         placeholder='Enter your City'
         onChange={(e)=>{
          setCity(e.target.value);
         }}
        />
         <label htmlFor='labelInput'></label> 
        <input
         type="text" 
         required
         placeholder='Enter your Country'
         onChange={(e)=>{
        setCountry(e.target.value);
         }}
        />
        <button type='submit'>Check</button>
      </form>
      <h1>Monthly Calendar of Namaz Timings</h1>
      {
       
        data.map((eachForecast, index)=>(
          <PrayerCard
          key={index}
         
          Date={eachForecast.date.readbody}
          Fajr={eachForecast.timings.Fajr}
          Dhuhr = {eachForecast.timings.Dhuhr}
          Asr = {eachForecast.timings.Asr}
          Maghrib = {eachForecast.timings.Maghrib}
          Isha = {eachForecast.timings.Isha}
          Sunrise = {eachForecast.timings.Sunrise}
          Sunset = {eachForecast.timings.Sunset}
           />
        ))
  
      }
    </div>
  )
}
export default PrayerTime;
