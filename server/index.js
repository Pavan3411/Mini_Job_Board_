const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require('./config/db');
const jobRoutes = require('./routes/jobRoutes');
const app = express();

dotenv.config();

connectDB();

// Allow requests from a specific origin
app.use(cors({
  origin: 'https://mini-job-board-frontend1.onrender.com'
}));

app.use(cors());

app.use(express.json());

app.use('/api/jobs', jobRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: err.message });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
