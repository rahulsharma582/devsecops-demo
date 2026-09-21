const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.json({
        message: "DevSecOps Demo Application",
        status: "running"
    });
});

app.listen(PORT, () => {
    console.log(`Application running on port ${PORT}`);
});