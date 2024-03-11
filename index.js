// const express = require ('express');     approach one but delete it since you using the import method
import express from "express";
import todosRoutes from "./routes/todos.routes.js";

// Create express app
const app = express();

// Use routes
app.use(todosRoutes);

// Listen For Incoming Requests
app.listen(4000, () => {
  console.log("express app is running!");
});
