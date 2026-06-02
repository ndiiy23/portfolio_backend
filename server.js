const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS so your Vercel frontend can talk to your Render backend
app.use(cors());
app.use(express.json());

// 1. Your existing root route (what we see in your screenshot)
app.get('/', (req, res) => {
    res.json({ message: "Portfolio API Running Successfully" });
});

// 2. THE FIX: Add the specific route your frontend script is searching for
app.get('/api/profile', (req, res) => {
    res.json({
        name: "Fahid Majid",
        role: "Data Scientist & Analyst",
        education: "Bachelor of Data Science - EASTC",
        skills: ["Python", "Machine Learning", "Data Analysis", "SQL", "Apache Spark", "Cloud Computing"],
        projects: ["Transaction Data Pipeline using Medallion Architecture", "Customer Churn Predictor", "Interactive Sales Dashboard"],
        location: "Dar es Salaam, Tanzania"
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});