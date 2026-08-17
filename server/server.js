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
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5174",
  "https://mern-journey-3hl4.vercel.app",
];

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests without an Origin header
      // (Postman, curl, server-to-server requests, etc.)
      if (!origin) {
        return callback(null, true);
      }

      // Allow localhost
      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      // Allow all Vercel deployments and preview URLs
      if (origin.endsWith(".vercel.app")) {
        return callback(null, true);
      }

      return callback(new Error("Not allowed by CORS"));
    },
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "HEAD", "OPTIONS"],
    credentials: true,
  })
);

// Middleware
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
    const PORT = process.env.PORT || 3000;

    app.listen(PORT, "0.0.0.0", () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("Database connection failed:", error);
  });