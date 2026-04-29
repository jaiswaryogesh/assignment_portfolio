require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Contact = require('./models/Contact');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

// Basic health check
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'Backend is running smoothly.' });
});

// Contact endpoint
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;
  
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  try {
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    
    // Slight delay to keep the frontend loading animation looking nice
    setTimeout(() => {
      res.status(200).json({ success: true, message: 'Message saved successfully.' });
    }, 800);
  } catch (error) {
    console.error('Error saving contact message:', error);
    res.status(500).json({ error: 'Failed to save message.' });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
