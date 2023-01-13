const express = require('express');
const app = express();
app.use(express.json());
app.get('/', (req, res) => {
    res.send('Hello there');
})
const courses = [
    { id: 1, name: 'Web Development' },
    { id: 2, name: 'IT' },
    { id: 3, name: 'Cybersecurity' },
];
// HTTP GET REQUESTS
app.get('/api/courses', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) {
        res.status(404).send("The course with the givern ID was not found");
    }
    res.send(course);
})
//HTTP POST REQUESTS
app.post('api/courses', (req, res) => {
    if (course.length <= 3) {
        const course = {

            id: course.length + 1,
            name: req.body.name
        }
    }
        res.push(course);
    })
app.listen(300, () => {
    console.log('Listening on port 3000...')
})