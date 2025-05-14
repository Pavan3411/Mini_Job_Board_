const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require('./config/db');
const jobRoutes = require('./routes/jobRoutes');
const app = express();

connectDB();

dotenv.config();

app.use(cors());
app.use(express.json());

app.use('/api/jobs', jobRoutes);

app.use((err, req, res, next) => res.status(500).json({message: err.message}));
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is running on port ${process.env.PORT}`));