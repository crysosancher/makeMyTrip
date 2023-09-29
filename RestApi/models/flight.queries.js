const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({
  flightImgUrl : {
    type: String,
    required: true
  },
  flightCompany: {
    type: String,
    required: true
  },
  flightNumber: {
    type: String,
    required: true
  },
  arrivalTime: {
    type: String,
    required: true
  },
  departureTime: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true,
  },
  travelTime: {
    type: String,
    required: true
  }
})


const Flight = mongoose.model('Flight', flightSchema);

const fetchFlights = async () => {
  try{
    const flights = await Flight.find();

    return flights;
  }
  catch(eror){
    throw eror;
  }
}

module.exports = { Flight, fetchFlights }