const express = require('express');
const { connection } = require('./db/db.js')
const { studentsRouter } = require('./routes/students.router');
const dotenv = require('dotenv');
const path = require('path');
const app = express();
dotenv.config({ path: `${__dirname}/config/.env` });
connection();
const dirname = __dirname;
const publicPath = path.join(dirname, 'public');

//middleware
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }))
app.use(express.static(publicPath));

//routes
app.use('/', studentsRouter);

app.listen(process.env.PORT, () => { console.log(`${process.env.ENVIRONMENT} Server Started at Port No ${process.env.PORT}`) });