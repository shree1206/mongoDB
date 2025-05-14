const express = require('express');
const dotenv = require('dotenv');
const app = express();
dotenv.config({ path: `${__dirname}/config/.env` });
app.get('', (req, res) => {
    res.send('Home Page')
})
app.listen(process.env.PORT, () => { console.log(`${process.env.ENVIRONMENT} Server Started at Port No ${process.env.PORT}`) });