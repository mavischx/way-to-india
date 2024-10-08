require('dotenv').config();
const express = require('express');
const cors = require('cors');
const admin = require('firebase-admin');

const app = express();
const port = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
});

// Sample route
app.get('/api', (req, res) => {
  res.json({ message: 'Hello the Express server!' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
