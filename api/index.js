const express = require('express');
const cors = require('cors');
const connection = require('./config/db.js');
const taskRouter = require("./routes/task.route.js");

const app = express();

connection
  .then(msg => {
    console.log(`Database Connected!`)
  })
  .catch(err => {
    console.error("Database connection failed", err);
  })

// MIDDLEWARES
app.use(cors({
  origin: "http://localhost:5173"
}));
app.use(express.json());

// ROUTES
app.use("/api/task", taskRouter);

app.listen(3000, () => {
    console.log("App running at http://localhost:3000");
})
