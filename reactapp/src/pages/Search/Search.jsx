import { useEffect, useState } from 'react'
import axios from 'axios';
import { Navbar } from '../../component/Navbar/Navbar'
import './Search.css'
import { useParams, useSearchParams } from 'react-router-dom';

const FlightCard = ({ arrivalTime, departureTime, flightCompany, flightImgUrl, flightNumber, price, travelTime, fromStn, toStn }) => {
    return     <div className='flight-card' >
    <div className='flight-details' >
        <div className='flight-brand' >  
            <img src={flightImgUrl} alt='flight-logo' />
            <div>
                <div className='flight-name' > {flightCompany} </div>
                <div className='flight-number' > {flightNumber} </div>
            </div>
        </div>

        <div>
            <div className='flight-time' > {arrivalTime} </div>
            <div className='flight-station' > {fromStn} </div>
        </div>

        <div className='flight-duration' >
            <div> {travelTime.split(':')[0]}h {travelTime.split(':')[1]}m </div>
            <div className='non-stop' > Non- stop </div>
        </div>

        <div>
            <div className='flight-time' > {departureTime} </div>
            <div className='flight-station' > {toStn} </div>
        </div>

        <div className='flight-price' > 
        ₹ {price}
        <div className='view-prices' > View Prices <img src='https://api.iconify.design/material-symbols:keyboard-arrow-down-rounded.svg?color=%23008cff' /></div>
        </div>
    </div>

    <div className='offer' >
        <span className='offer-dot' > </span>
        Get Rs 401 off using MMTDEAL*
    </div>
    
    <div className='view-flight' >
        View Flight Details
    </div>
</div>
}

export const Search = () => {


    const [ flights, setFlights ] = useState([]);

    const [ searchParams, setSearchParams ] = useSearchParams();

    const fromStn = searchParams.get('fromStn');
    const toStn = searchParams.get('toStn');

    const fetchFlights = async () => {
        try{
            const flights = await axios.post('http://localhost:5000/flight');
            setFlights(flights.data.flights.splice(2,3));
        }
        catch(eror){
            console.error('some error in fetching flights', eror);
        }
    }

    useEffect( () => {
        fetchFlights();
    }, [] )

    return <div className="search-container" >
        <Navbar />
        <main className='search-main' >
            <div className='head' > Flights From {fromStn} to {toStn} </div>
            <section className='flights-container' >
            {
                flights?.map( ({ arrivalTime, departureTime, flightCompany, flightImgUrl, flightNumber, price, travelTime, _id }) => <FlightCard 
                arrivalTime={arrivalTime}
                departureTime={departureTime}
                flightCompany={flightCompany}
                flightImgUrl={flightImgUrl}
                flightNumber={flightNumber}
                price={price}
                travelTime={travelTime}
                fromStn={fromStn}
                toStn={toStn}
                key={_id}
                /> )
            }
            </section>
        </main>
    </div>
}