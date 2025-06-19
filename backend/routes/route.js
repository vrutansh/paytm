const express = require("express");

const UserRouter = express.Router("./user")
const router = express.Router();
router.use("/user", UserRouter)
module.exports = router;
