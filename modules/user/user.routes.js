const express = require("express");
const {
  registerUser,
  loginUser,
  getAllUsers,
  deleteUser,
  emailVerification,
  getUser,
  getUserInfo,
  forgetPassword,
  changePassword,
  checkIsExistEmail,
  updateUserInfo,
} = require("./user.controller");
const { isAuth } = require("../../utils/middleware");

const router = express.Router();
"/user/signup", //----POST METHOD
  "/user/login", //----POST METHOD
  "/user/resetpassword", //----POST METHOD
  "/user/addUser [player,coach,manager]", //----POST METHOD
  "/user/getAllPlayers|coaches|managers", //------get method
  "/editplayer/:id"; // ---patch

router.post("/signup", registerUser);
router.post("/login", loginUser);
router.post("/verifyEmail", emailVerification);
router.patch("/:id", updateUserInfo);
router.get("/", isAuth, getAllUsers);
router.delete("/delete/:id", deleteUser);
router.get("/:id", getUser);
router.get("/user-info/me", isAuth, getUserInfo);
router.post("/forgot-password", forgetPassword);
router.post("/change-password", isAuth, changePassword);
router.post("/check-email", checkIsExistEmail);

module.exports = router;
