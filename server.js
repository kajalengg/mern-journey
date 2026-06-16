require('dotenv').config();
const express = require('express');
const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);
const cors = require("cors")
const authRouter = require('./router/auth-router');
const contactRouter = require('./router/contact-router');
const connectDB = require('./utils/db');
const errorMiddleware = require('./middleware/error-middleware');



const app = express();


const corsOption = {
  origin: "http://localhost:5173",
  methods: "GET,POST,PUT,DELETE,PATCH,HEAD",
  credentials: true,
};



app.use(cors(corsOption));
app.use(express.json());// Middleware to parse JSON bodies


app.use("/auth", authRouter);
app.use("/api", contactRouter);
app.use(errorMiddleware);


//app.get('/', (req, res) => {
  //res.status(200).send('Hello World!');
//});

connectDB().then(() => {
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
});