
const { studentsCollectionModel } = require('../model/school/students.model');

const studentSelect = (async (req, response) => {
    const data = await studentsCollectionModel.find();
    if (data) {
        response.render('home', { data })
    }
});

module.exports = {
    studentSelect: studentSelect,
}