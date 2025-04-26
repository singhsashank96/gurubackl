const express = require("express");
const router = express.Router();

const {
  createOrUpdateContactDetails,
  getContactDetails,
  deleteContactDetails,
} = require("../Controllers/dashboard_controller");

// Route to create or update contact details
router.post("/", createOrUpdateContactDetails);

// Route to get contact details
router.get("/", getContactDetails);

// Route to delete contact details
router.delete("/", deleteContactDetails);

module.exports = router;
