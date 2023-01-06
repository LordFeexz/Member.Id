const Controller = require("../controllers/award");
const authentication = require("../middlewares/authentication");

const router = require("express").Router();

router.use(authentication);

router.get("/", Controller.getAllData);

module.exports = router;
