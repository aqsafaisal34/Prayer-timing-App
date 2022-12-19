import React from 'react';
import './style.css';

let PrayerCard = ({Date,Fajr,Dhuhr,Asr, Maghrib,Isha,Sunrise,Sunset}) => {
    return(
        <div className='prayerCard'>
           <p>Date{Date}:</p>
           <p>Fajr{Fajr}</p>
           <p>Dhuhr{Dhuhr}</p>
           <p>Asr{Asr}</p>
           <p>Maghrib{Maghrib}</p>
           <p>Isha{Isha}</p>
           <p>Sunrise{Sunrise}</p>
           <p>Sunset{Sunset}</p>
        </div>
    )
}

export default PrayerCard;