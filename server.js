require('dotenv').config();
const express = require('express');
const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);
const authRouter = require('./router/auth-router');
const connectDB = require('./utils/db');

const app = express();

app.use(express.json());// Middleware to parse JSON bodies


app.use("/auth", authRouter);


app.get('/', (req, res) => {
  res.status(200).send('Hello World!');
});

connectDB().then(() => {
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
});