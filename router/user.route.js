const users = require('../controller/user.controller');
const express = require('express');
const router = express.Router();

//create user
router.post("/", users.create);

//retrieve all users
router.get("/", users.findAll);

//retrieve one user
router.get("/:id", users.findOne);

//update user
router.put("/:id", users.update);

//delete user
router.delete("/:id", users.delete);

//delete all users
router.delete("/", users.deleteAll);