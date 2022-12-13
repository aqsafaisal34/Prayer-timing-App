import React, { useState } from 'react';
import './App.css';
import  Prayer from './prayer';


import axios from 'axios';

function App() {
  const [location,setLocation]= useState ("");
  const [data,setData]=useState([]);

  let submitHandler = async (e) => {
    e.preventDefault();
    console.log("I am submit Handler")


    try {
      let response = await axios.get(`http://api.aladhan.com/v1/calendarByCity?city=${location}&country=pakistan&method=2&month=04&year=2017appid=e380935c24msh941f6b3907949b0p1f070bjsn6eff51300597`)

      // http://api.aladhan.com/v1/calendarByCity?city=${location}&country=pakistan&method=2&month=04&year=2017appid=e380935c24msh941f6b3907949b0p1f070bjsn6eff51300597

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
         placeholder='Enter your location'
         onChange={(e)=>{
          setLocation(e.target.value);
         }}
        />
        <button type='submit'>Check</button>
      </form>
      {
        data.map((eachForecast, index)=>(
          <Prayer
          key={index}
          time={eachForecast.timings.Fajr}
           />
        ))
      }
    </div>
  )
}

export default App
