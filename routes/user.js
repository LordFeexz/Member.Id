const Controller = require("../controllers/user");

const router = require("express").Router();

router.get("/", Controller.getAllUser);

router.get("/:id", Controller.getUserById);

module.exports = router;
