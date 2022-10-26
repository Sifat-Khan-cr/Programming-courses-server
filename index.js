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
app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    const course = data.find(n => n.id === id);
    res.send(course);
    // console.log(course);
})


app.listen(port, () => {
    console.log('running', port);
})