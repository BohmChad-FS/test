const { urlencoded } = require("express");
const express = require("express");
const req = require("express/lib/request");
const { process_params } = require("express/lib/router");
require("dotenv").config();
const app = express();

app.get("/", (req, res, next) => {
    res.json({
        message: "Using GET /",
        metadata: {
            host: req.hostname,
            port:  process.env.port,
            method: req.method
        }
    });
});

// post, patch, delete

app.get("/:id", (req, res, next) => {
    const userId = req.params.id
    res.json({
        message: "Using GET /",
        metadata: {
            host: req.hostname,
            port:  process.env.port,
            id: userId,
            method: req.method
        }
    });
});

app.post("/", (req, res, next) => {
    res.json({
        message: "Using POST /",
        metadata: {
            host: req.hostname,
            port: process.env.port,
            method: req.method
        }
    });
});

app.patch("/:id", (req, res, next) => {
    const userId = req.params.id
    res.json({
        message: "Using PATCH /",
        metadata: {
            host: req.hostname,
            port:  process.env.port,
            id: userId,
            method: req.method
        }
    });
});

app.delete("/:id", (req, res, next) => {
    const userId = req.params.id
    res.json({
        message: "Using DELETE /",
        metadata: {
            host: req.hostname,
            port: process.env.port,
            id: userId,
            method: req.method
        }
    });
});

// middleware modules for error handling
app.use((req, res, next) => {
    const error = new Error("NOT FOUND!!!");
    error.status = 404;
    next(error);
});
// middleware to send error nicely
app.use((error, req, res, next) => {
    res.status(error.status || 500).json({
        error: {
            message: error.message,
            status: error.status,
            method: req.method
        }});
});


app.listen(process.env.port, () => console.log(`Starting server on port${process.env.port}`))