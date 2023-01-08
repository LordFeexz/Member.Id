const Controller = require("../controllers/user");

const router = require("express").Router();

router.get("/", Controller.getAllUser);

router.patch("/", Controller.changePassword);

router.get("/:id", Controller.getUserById);

module.exports = router;
