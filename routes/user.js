const Controller = require("../controllers/user");
const authentication = require("../middlewares/authentication");

const router = require("express").Router();

router.use(authentication);

router.get("/", Controller.getAllUser);

router.patch("/", Controller.changePassword);

router.put("/", Controller.editData);

router.get("/:id", Controller.getUserById);

module.exports = router;
