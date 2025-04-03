import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Log the current working directory
console.log('Current working directory:', process.cwd());

// Log all environment variables to check if they are loaded
console.log('Environment Variables:', process.env);

// Log the MONGO_URI to verify it's loaded correctly
console.log('MongoDB URI:', process.env.MONGO_URI);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

import imageRoutes from './server/routes/imageRoutes.js';

app.use('/api/images', imageRoutes); // Use the image routes

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
