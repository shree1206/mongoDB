const mongoose = require('mongoose');

const studentsScema = mongoose.Schema({
    name: {
        type: String,
    },
    course: {
        type: String
    },
    age: {
        type: String
    },
    hobbies: {
        type: String
    },
    address: {
        type: String
    },
});


const studentsCollection = mongoose.model('students', studentsScema);

module.exports = {
    studentsCollectionModel: studentsCollection
}