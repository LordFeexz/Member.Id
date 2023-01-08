const router = require("express").Router();
const authRouter = require("./auth");
const awardRouter = require("./award");
const userRouter = require("./user");

router.use("/auth", authRouter);

router.use("/users", userRouter);

router.use("/award", awardRouter);

module.exports = router;
