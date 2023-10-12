// In your server/routes/api.js
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/User');

router.post('/register', async (req, res) => {
    try {
        const { username, password } = req.body;

        // Hash the password before saving it to the database
        const hashedPassword = await bcrypt.hash(password, 10);

        // Save the user to the database
        const newUser = new User({
            username,
            password: hashedPassword,
        });

        await newUser.save();

        res.json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Registration failed:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
