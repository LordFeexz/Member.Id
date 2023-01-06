const router = require("express").Router();
const authRouter = require("./auth");
const awardRouter = require("./award");

router.use("/auth", authRouter);

router.use("/award", awardRouter);

module.exports = router;
