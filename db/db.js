const mongoose = require('mongoose');

const connectDB = (async (req, response) => {
    await mongoose.connect('mongodb://localhost:27017', {
        dbName: 'school',
    }).catch((err) => {
        console.log(err)
    })
    console.log('MongoDB Database connected');
});


module.exports = {
    connection: connectDB
}
