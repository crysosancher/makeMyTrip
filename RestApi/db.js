const mongoose = require('mongoose');

const mongoUri = 'mongodb+srv://him:him@cluster0.kuyrg.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'mmt'
})
.then( () => console.log('connected to db') )
.catch( eror => console.log('error in connecting to db', eror) )