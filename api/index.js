const express = require('express');
const cors = require('cors');

const app = express();

// MIDDLEWARES
app.use(cors());
app.use(express.json());

app.listen(() => {
    console.log("App running at http://localhost:3000");
})
