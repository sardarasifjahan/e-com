const express = require("express");
const router = express.Router();
const User = require("../../models/user");
const { requireSignin } = require("../../common-middleware");
const { signup, signin, signout } = require("../../controller/admin/auth");

router.post("/admin/signin", signin);
router.post("/admin/signup", signup);
router.post("/admin/signout", requireSignin, signout);

module.exports = router;
