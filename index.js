const express = require('express');
const app = express();

app.get('', (req, res) => {
    res.send('Home Page')
})
app.listen(4400, () => { console.log('Development Server Started at Port No 4400') })