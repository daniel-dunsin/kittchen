require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes');
const cors = require('cors');

const app = express();
app.set('view enjine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use('/api', router);

app.use((err, req, res, next) => {
  console.log(err);
  if (err.statusCode) {
    return res.status(err.statusCode).json({ error: err.message || err });
  }
  res.status(500).json({ error: 'internal server error occured' });
});

app.all('*', (req, res) => {
  res.status(404).json({ error: 'route not found' });
});

const port = 3001;

app.listen(port, async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log('db and app connected');
  } catch (error) {
    console.error('unable to connect to db');
  }
});
