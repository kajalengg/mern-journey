require("dotenv").config();

const express = require("express");
const dns = require("dns");
const cors = require("cors");

const authRouter = require("./router/auth-router");
const contactRouter = require("./router/contact-router");
const serviceRouter = require("./router/service-router");
const adminRouter = require("./router/admin-router");

const connectDB = require("./utils/db");
const errorMiddleware = require("./middleware/error-middleware");

// DNS configuration
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const app = express();

// CORS configuration
const corsOption = {
  origin: [
    "http://localhost:5173",
    "http://localhost:5174",
  ],
  methods: "GET,POST,PUT,DELETE,PATCH,HEAD,OPTIONS",
  credentials: true,
};

// Middleware
app.use(cors(corsOption));
app.use(express.json());

// Routes
app.use("/auth", authRouter);
app.use("/api", contactRouter);
app.use("/data", serviceRouter);
app.use("/admin", adminRouter);

// Error middleware
app.use(errorMiddleware);

// Connect Database and Start Server
connectDB()
  .then(() => {
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((error) => {
    console.log("Database connection failed:", error);
  });