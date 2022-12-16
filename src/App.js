import React from 'react';
import PrayerTime from './components/prayertime';
import './App.css';
import BackImg from './assets/backImg.webp';

function App() {
  return (
    <div>
      <div
        id="bg-image"
        style={{
          backgroundImage: `url(${BackImg})`,
          backgroundRepeat: "no-repeat",
          minHeight: "100vh",
          backgroundSize: "cover",
          Width: "100%",
         
         
        }}
      >
      <PrayerTime />
      </div>
    </div>
  )
}

export default App;

