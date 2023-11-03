const express = require("express");
const index = express();
require("dotenv").config();
const port = process.env.PORT;
const cors = require("cors");
const router = require("./router/mainRouter");
const mongoose = require("mongoose");
mongoose.connect(process.env.DB_KEY);
index.use(cors({
    origin: 'https://memberships.onrender.com'
}));
index.use(express.json());
index.use("/", router);
index.listen(port);