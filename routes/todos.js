const express = require("express");
const router = express.Router();

const { createTodo } = require("../controllers/createTodo");
const { getTodo } = require("../controllers/getTodo");

//define api router
router.post("/createTodo", createTodo);
router.get("/getTodo", getTodo);


module.exports = router;
