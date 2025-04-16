import express from "express";
import cors from "cors"; // Import cors
import authRoutes from "./routes/authRoutes.js";
import { connectMongoDB } from "./config/db.js";

const app = express();
app.use(cors()); 
// Body parser middleware
app.use(express.json());
// Connect to MongoDB
connectMongoDB();
// Auth routes
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
