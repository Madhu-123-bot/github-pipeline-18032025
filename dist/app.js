"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = require("dotenv");
const mysql2_1 = __importDefault(require("mysql2"));
const envFile = `.env.${process.env.NODE_ENV || "dev"}`;
(0, dotenv_1.config)({ path: envFile }); // Load environment variables from .env file
const PORT = process.env.PORT || 3000;
const app = (0, express_1.default)();
// Create a MySQL connection
const connection = mysql2_1.default.createConnection({
    host: "localhost", // or use your MySQL server's IP address
    user: process.env.DB_USER, // Set this in your .env file
    password: process.env.DB_PASSWORD, // Set this in your .env file
    database: process.env.DB_NAME, // Set this in your .env file
});
// API Endpoint for DB Health Check
app.get("/api/db-health", (req, res) => {
    connection.query("SELECT 1", (err, results) => {
        if (err) {
            return res.status(500).json({ status: "error", message: err.message });
        }
        res.status(200).json({ status: "success", message: "Database is up", data: results });
    });
});
app.get("/", (req, res) => {
    res.send("<h1>Hello world</h1>");
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
