require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Reservation Model
const reservationSchema = new mongoose.Schema({
  checkIn: Date,
  checkOut: Date,
  guests: {
    adults: { type: Number, required: true },
    children: { type: Number, default: 0 },
    infants: { type: Number, default: 0 },
    pets: { type: Number, default: 0 }
  },
  totalGuests: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now }
});

const Reservation = mongoose.model('Reservation', reservationSchema);

// Routes
app.post('/api/reservations', async (req, res) => {
  try {
    const {checkIn, checkOut, guests } = req.body;

    // Validation
    if (!checkIn || !checkOut) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    if (!guests?.adults || guests.adults < 1) {
      return res.status(400).json({ error: 'At least one adult is required' });
    }

    const reservation = new Reservation({
      checkIn,
      checkOut,
      guests,
      totalGuests: guests.adults + (guests.children || 0)
    });

    await reservation.save();
    res.status(201).json(reservation);

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));