"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = require("dotenv");
const envFile = `.env.${process.env.NODE_ENV || "dev"}`;
(0, dotenv_1.config)({ path: envFile }); // Load environment variables from.env file
const PORT = process.env.PORT || 3000;
const app = (0, express_1.default)();
app.get("/", (req, res) => {
    res.json({
        message: "Hey, I am nodejs app in AzureVM using GitHubActions!",
    });
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
