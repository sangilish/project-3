const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const https = require('https');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const app = express();

// SSL 인증서 설정
const sslOptions = {
  key: fs.readFileSync(path.join(__dirname, 'ssl', 'localhost-key.pem')),
  cert: fs.readFileSync(path.join(__dirname, 'ssl', 'localhost.pem'))
};

// Middleware
app.use(express.json());
app.use(cors({
  origin: process.env.CLIENT_URL || 'https://localhost:3000',
  credentials: true
}));
app.use(helmet());
app.use(cookieParser());
app.use(session({
  secret: process.env.SESSION_SECRET || 'your-secret-key',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: true,
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  }
}));

// MongoDB 연결
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/book-scan-service', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log('MongoDB Connection Error:', err));

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/books', require('./routes/books'));

const PORT = process.env.PORT || 5000;

// HTTPS 서버 생성
https.createServer(sslOptions, app).listen(PORT, () => {
  console.log(`Server running on https://localhost:${PORT}`);
}); 