import "dotenv/config";
import express from "express";
import cors from "cors";
import Lab5 from "./Lab5/index.js";

const app = express();

// Configure CORS
app.use(cors());

// Configure Express to parse JSON
app.use(express.json());

// Register Lab5 routes
Lab5(app);

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
