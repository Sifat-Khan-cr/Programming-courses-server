const express = require('express');
const cors = require('cors');
const data = require('./data/course.json')
const app = express();
const port = process.env.PORT || 5000;


app.use(cors());

app.get('/', (req, res) => {
    res.send("running");
})
app.get('/courses', (req, res) => {
    res.send(data);
})


app.listen(port, () => {
    console.log('running', port);
})