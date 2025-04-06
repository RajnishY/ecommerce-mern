const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");

require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());


app.use("/api/users", userRoutes);
app.listen(process.env.PORT, () => console.log(`🚀 Server running on port ${process.env.PORT}`));
