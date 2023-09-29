require('./db.js');


const { fetchFlights } = require('./models/flight.queries.js');

const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req,res) => res.send('connected to express') );

app.post('/flight', async (req,res) => {
  const { fromStn, toStn } = req.body;

  try{
    const flightsArray = await fetchFlights();

    // const flightsWithStns = flightsArray.map( obj => ({ ...obj, fromStn, toStn }) );

    // console.log(flightsWithStns);

    res.json({ message: 'flights fetched successfully', flights : flightsArray });
  }
  catch(error){
    res.status(500).json({ error })
  }
})

app.listen(5000, () => console.log('connected to express on port 5000'))