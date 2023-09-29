import React, { useState } from "react";
import FlightIcon from "@mui/icons-material/Flight";
import HotelIcon from "@mui/icons-material/Hotel";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import HolidayVillageIcon from "@mui/icons-material/HolidayVillage";
import TrainIcon from "@mui/icons-material/Train";
import DirectionsBusFilledIcon from "@mui/icons-material/DirectionsBusFilled";
import LocalTaxiIcon from "@mui/icons-material/LocalTaxi";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import DownhillSkiingIcon from "@mui/icons-material/DownhillSkiing";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
// import styled from "styled-components";

import { useNavigate } from "react-router-dom";

import './Header.css'
import HolidayVillage from "@mui/icons-material/HolidayVillage";


export default function Header() {

  const navigate = useNavigate();
  const [ fromStn, setFromStn ] = useState('Delhi');
  const [ toStn, setToStn ] = useState('Kolkata');

  const date = new Date();

  const yyyy = date.getFullYear();
  const mm = parseInt(date.getMonth())+1;
  const dd = date.getDate();

  console.log(yyyy,mm,dd)

  return <div className="container-header" >
    <div className="icons-container" >
      <div>
        <span> <FlightIcon  style={{ fontSize: 30, padding: 4 }}></FlightIcon> </span>
        <span> Flights </span>
      </div>
      <div>
        <span> <HotelIcon style={{ fontSize: 30, padding: 4 }}></HotelIcon> </span>
        <span> Hotels </span>
      </div>
      <div>
        <span> <HomeWorkIcon  style={{ fontSize: 30, padding: 4 }}></HomeWorkIcon> </span>
        <span> Homestays </span>
      </div>
      <div>
        <span> <HolidayVillage style={{ fontSize: 30, padding: 4 }}></HolidayVillage> </span>
        <span> Holiday Packages </span>
      </div>
      <div>
        <span> <TrainIcon  style={{ fontSize: 30, padding: 4 }}></TrainIcon> </span>
        <span> Trains </span>
      </div>
      <div>
        <span> <DirectionsBusFilledIcon  style={{ fontSize: 30, padding: 4 }}></DirectionsBusFilledIcon> </span>
        <span> Buses </span>
      </div>
      <div>
        <span> <LocalTaxiIcon  style={{ fontSize: 30, padding: 4 }}></LocalTaxiIcon> </span>
        <span> Train </span>
      </div>
      <div>
        <span> <CreditCardIcon  style={{ fontSize: 30, padding: 4 }}></CreditCardIcon> </span>
        <span> Forex </span>
      </div>
      <div>
        <span> <DownhillSkiingIcon  style={{ fontSize: 30, padding: 4 }}></DownhillSkiingIcon> </span>
        <span> Travel insurance </span>
      </div>
   </div>

  <section className="section1" >
    <div>
      <label> <input checked='true' type='radio' name='trip-type'/> One Way  </label>
      <label> <input type='radio' name='trip-type'/> Round Trip </label>
      <label> <input type='radio' name='trip-type'/> Multi City  </label>
    </div>
    <div>
      Book International And Domestic Flights
    </div>
  </section>
  <section className="section2" >
    <div className="select-container" >
      <div> From </div>
      <select  onChange={ e => setFromStn(e.target.value) } value={fromStn} >
        <option value='' > --select From-- </option>
        <option value='Mumbai' > Mumbai </option>
        <option value='Delhi' > Delhi </option>
        <option value='Kolkata' > Kolkata </option>
      </select>
    </div>
    <div>
      <div> To </div>
      <select onChange={ e => setToStn(e.target.value) } value={toStn}  >
        <option value='' > --select To-- </option>
        <option value='Mumbai' > Mumbai </option>
        <option value='Delhi' > Delhi </option>
        <option value='Kolkata' > Kolkata </option>
      </select>
    </div>
    <div>
      <label> Departure <input type='date'/> </label>
    </div>
    <div> 
      <div> Traveller & Class </div>
      <div className="traveller-economy" > 1 Traveller </div>
    </div>
  </section>
  <section className="section3" >
    <div>
      select a Fare Type:
    </div>
    <label> <input type='radio' name='fare-type' /> Regular Fares </label>
    <label> <input type='radio' name='fare-type' /> Armed Forces Fare </label>
    <label> <input type='radio' name='fare-type' /> Student Fares </label>
    <label> <input type='radio' name='fare-type' /> Senior Citizen Fare </label>
    <label> <input type='radio' name='fare-type' /> Doctor & Nurse Fair </label>
    <label> <input type='radio' name='fare-type' /> Double Seat Fare </label>
  </section>
  <button className="search-btn" onClick={ () => navigate(`/search?fromStn=${fromStn}&toStn=${toStn}`) } >
    Search
  </button>
  </div>
}