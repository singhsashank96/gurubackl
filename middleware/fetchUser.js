


const jwt = require("jsonwebtoken");
const env = require("dotenv");

env.config({ path: "../../.env" });
const JWT_SECRET = process.env.JWT_SECRET || "sahh34";

const fetchuser = (req, res, next) => {
  console.log("Middleware invoked ✅");

  const token = req.header("Authorization")?.replace("Bearer ", "").trim();
  console.log("JWT_SECRET:", JWT_SECRET);
  console.log("Received Token:", token);

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Access denied. No token provided.",
    });
  }

  try {
    const data = jwt.verify(token, JWT_SECRET);
    req.user = data.user;
    console.log("Token verified successfully ✅");
    next();
  } catch (error) {
    console.error("JWT Verification Error:", error);
    let errorMessage =
      error.name === "TokenExpiredError"
        ? "Session expired. Please log in again."
        : "Invalid token. Authentication failed.";

    return res.status(401).json({
      success: false,
      message: errorMessage,
    });
  }
};

module.exports = {fetchuser};
