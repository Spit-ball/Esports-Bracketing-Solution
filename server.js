const express = require('express');
const mongoose = require('mongoose');
const User = require('./server/models/User'); // Add this line to import the User model

const app = express();
const port = 5000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/esports', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});


// Registration route
app.post('/api/register', async (req, res) => {
    try {

        console.log(req.headers);
        // Assuming you have a User model defined
        const User = mongoose.model('User');

        // Create a new user with data from the request body
        const newUser = new User({
            username: req.body.username,
            password: req.body.password,
            // Add other fields as needed
        });

        // Save the user to the database
        await newUser.save();

        res.status(201).json({ message: 'Registration successful' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Registration failed', error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
