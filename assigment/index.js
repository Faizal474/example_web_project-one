const express = require("express");
const mongoose = require("mongoose");

// Initialize express app
const app = express();
app.use(express.json());

// MongoDB connection URI for Compass (local MongoDB)
const mongoURI = 'mongodb://127.0.0.1:27017/my_database';

// Connect to MongoDB
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log(' Connected to MongoDB Compass'))
.catch(err => console.error(' MongoDB connection error:', err));

// Define schema and model
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    id: Number
});

const User = mongoose.model("User", userSchema);

// POST route to insert data
app.post("/post", async (req, res) => {
    try {
        const data = new User({
            name: req.body.name,
            email: req.body.email,
            id: req.body.id
        });

        const savedData = await data.save();
        res.status(201).json(savedData);
    } catch (err) {
        res.status(500).json({ error: "Failed to save data", details: err });
    }
});

// GET route to fetch all users
app.get("/users", async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch data" });
    }
});

// Start the server
app.listen(3000, () => {
    console.log("🚀 Server running on http://localhost:3000");
});
