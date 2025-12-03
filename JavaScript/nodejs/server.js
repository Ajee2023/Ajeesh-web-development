import express from 'express';

const app = express();
const port = 3002;

app.use(express.json());

let students = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
];

app.get('/api/students', (req, res) => {
    res.json(students);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
