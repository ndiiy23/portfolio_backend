const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "Portfolio API Running Successfully"
    });
});

app.get("/api/profile", (req, res) => {
    res.json({
        name: "Fahid Majid",
        role: "Data Scientist & Analyst",
        education: "Bachelor of Data Science - EASTC",

        skills: [
            "Python",
            "Machine Learning",
            "Data Analysis",
            "SQL",
            "PHP",
            "Cloud Computing"
        ],

        projects: [
            "Exchange Rate Forecasting Using LSTM",
            "School Management System",
            "Portfolio Website"
        ],

        location: "Dar es Salaam, Tanzania"
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});