// const express = require ('express');     approach one but delete it since you using the import method
import express from "express";

// Create express app
const app = express();

// Define routes
app.get("/", (req, res) => {
  // console.log(req.query, req.headers);
  res.send("Over and Out!");
});

app.get("/ping", (req, res) => {
  // console.log(req.query, req.headers);
  res.send("Ping Pong!");
});
app.get("/file", (req, res) => {
  console.log(process.cwd());
  res.sendFile(process.cwd()+ "/index.html");
});

// Listen For Incoming Requests
app.listen(4000, () => {
  console.log("express app is running!");
});
