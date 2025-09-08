//server instantiate kra
const express = require("express");
const app = express();

//.env file se jo bhi port tha vo utha lia
require("dotenv").config();
const PORT = process.env.PORT || 3000;

// Middleware to parse json req body (parsing)
app.use(express.json());

// Import and mount router for TODO API
const todoRoutes = require("./routes/todos");
app.use("/api/v1", todoRoutes); // mount(add,apend)

// Default route 
app.get("/", (req, res) => {
    res.send("<h1>This is Home page body</h1>");
});

// Database connection
const dbConnect = require("./config/database");
dbConnect();

// Start server
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT} !!`);
});
