const Controller = require("../controllers/auth");

const router = require("express").Router();

router.post("/login", Controller.login);

router.post("/register", Controller.register);

module.exports = router;
