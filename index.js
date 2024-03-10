const express = require('express');

const app = express();
const PORT = 8000;

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    next();
});

app.get('/data', (req, res) => {
    console.log(res);
    //it's a good practice to return JSON data
    res.json({ data: 'Hello World again' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});