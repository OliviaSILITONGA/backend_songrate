const express = require('express');
const cors = require('cors');
const { connectDB } = require('./config/db');

// --- PERBAIKAN DI SINI ---
// HAPUS atau GANTI baris ini: const eventRoutes = require('./routes/events');
const reviewRoutes = require('./routes/reviews'); // Pastikan nama file 'reviews.js' ada di folder routes!
const authRoutes = require('./routes/auth'); 

const app = express();

connectDB();

app.use(express.json({ extended: false }));
app.use(cors());

// --- PERBAIKAN DI SINI JUGA ---
// HAPUS atau GANTI baris ini: app.use('/api/events', eventRoutes);
app.use('/api/reviews', reviewRoutes); // Endpoint berubah jadi /api/reviews
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  res.send('API SongRATE Running...');
});

module.exports = app;