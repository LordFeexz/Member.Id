const Controller = require("../controllers/user");

const router = require("express").Router();

router.get("/", Controller.getAllUser);

module.exports = router;
