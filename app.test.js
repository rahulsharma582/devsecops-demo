const request = require("supertest");
const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.json({
        message: "DevSecOps Demo Application",
        status: "running"
    });
});

test("GET / should return application status", async () => {
    const response = await request(app).get("/");

    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe("running");
});