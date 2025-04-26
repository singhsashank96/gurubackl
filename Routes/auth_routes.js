const express = require("express");
const router = express.Router();
const { fetchuser } = require("../middleware/fetchUser.js");
const multer = require("multer");
const {
  register,
  login,
  allUser,
  authUser,
  updateprofile,
  sendotp,
  getCoins,
  addCoins,
  updateCoins,
  getUserById,
  UserRegister , 
  UpdateProfileName , updatePasswordByAdmin , sendOTP , verifyOtp , forgetPassword , verifyOtpChangePass
} = require("../Controllers/auth_controller.js");

const upload = multer();

router.post("/register",  register);
router.post("/UserRegister",  UserRegister);
router.post("/forgetPassword",  forgetPassword);
router.post("/verifyOtpChangePass",  verifyOtpChangePass);



router.post("/login", login);
router.post("/sendOtp", sendOTP);
router.post("/verifyOtp", verifyOtp);


router.get("/login", authUser);
router.get("/userCoins", getCoins);
router.post("/addCoins", addCoins);
router.put("/userCoins", updateCoins)

router.get("/" , allUser);
router.get("/user/:id" , fetchuser ,  getUserById);
router.put("/update/:id" , UpdateProfileName);

router.put("/update", updateprofile);
router.put("/updatePassword", updatePasswordByAdmin);

router.post("/getotp", sendotp);
module.exports = router;
