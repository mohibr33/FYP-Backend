require('dotenv').config();
const express = require('express');
const connectToDatabase = require('./config/db'); 
const authRoutes = require('./routes/authRoutes'); // <--- add this
const session = require("express-session");
const passport = require("passport");
const articleRoutes = require('./routes/articleRoutes');
const supportRoutes = require('./routes/supportRoutes');
const adminRoutes = require('./routes/adminRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const medicineRoutes = require('./routes/medicineRoutes');

require("./config/passport");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(session({
  secret: process.env.JWT_SECRET,
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());


// Connect to DB
connectToDatabase()
  .then(() => console.log('Database connection established'))
  .catch(err => console.error(err));

// Middleware
app.use(express.json());

// Default test route
app.get('/', (req, res) => {
  res.send('Server is running!');
});

// Auth routes
app.use('/api/auth', authRoutes); // <--- mount routes
app.use('/api/articles', articleRoutes);
app.use('/api/support', supportRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/medicine',medicineRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
