import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB connected'))
.catch(err => console.error('❌ MongoDB connection error:', err));

app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

// Add this route to insert data into the database
app.post('/add-data', async (req, res) => {
  const newData = { name: 'Sample Data' };
  try {
    await mongoose.connection.db.collection('yourCollection').insertOne(newData);
    res.send('Data added!');
  } catch (error) {
    console.error('❌ Error adding data:', error);
    res.status(500).send('Error adding data');
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
