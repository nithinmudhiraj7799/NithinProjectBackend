const express = require('express');
const cors = require('cors');
const connectDB = require('./configuration/db.js');
const authRoutes = require('./routes/userRoutes.js');

const app = express();
const PORT = 4700;

app.use(cors({
  origin: 'http://localhost:5173', 
  credentials: true
}));

app.use(express.json());

connectDB();

app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
