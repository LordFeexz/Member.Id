const Controller = require("../controllers/award");
const authentication = require("../middlewares/authentication");

const router = require("express").Router();

router.use(authentication);

router.get("/", Controller.getAllData);

//additional methods that can be used with postman

router.get("/:id", Controller.getDataById);

module.exports = router;
