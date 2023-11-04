const express = require('express');
const cors = require('cors'); // Importez cors
const app = express();
const body = require('body-parser');
app.use(body.json());
app.use(cors()); // Utilisez cors

let skills = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0]
];

const corsOptions = {
    origin: 'http://localhost:5173',
    optionsSuccessStatus: 200
};

app.get('/total', (req, res) => {
    res.json({skills});
});

app.post('/add', (req, res) => {
    const tab = req.body.skills;
    for (let i = 0; i < skills.length - 1; i++) {
        for (let j = 0; j < skills[i].length; j++) {
            skills[i][j] += tab[i][j];
        }
    }
    skills[5][0]++;
    res.json({ success: true });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('server is running');
})