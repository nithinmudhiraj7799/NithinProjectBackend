const express = require('express');
const cors = require('cors');
const connectDB = require('./configuration/db.js');
const authRoutes = require('./routes/userRoutes.js');

const app = express();
const PORT = 4700;

app.use(cors({
  origin: [
    'http://localhost:5173', 
    'https://frontend-task-nithin-o2mn-on1t71r5r-nithins-projects-19efe843.vercel.app'
  ],
  credentials: true
}));


app.use(express.json());

connectDB();

app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
