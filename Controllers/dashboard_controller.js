const DashboardStatus = require("../Models/Dashboard.js");
const ContactDetails = require("../Models/Contact.js")

// Add or update the dashboard status
const createOrUpdateDashboardStatus = async (req, res) => {
  const { status } = req.body;
  if (!status || typeof status !== "string") {
    return res.status(400).json({ error: "Status must be a valid string." });
  }

  try {
    // Check if a status already exists
    let existingStatus = await DashboardStatus.findOne();

    if (existingStatus) {
      // Update the existing status
      existingStatus.status = status;
      await existingStatus.save();
      return res.status(200).json({ message: "Status updated successfully!", status: existingStatus });
    } else {
      // Create a new status
      const newStatus = new DashboardStatus({ status });
      await newStatus.save();
      return res.status(201).json({ message: "Status created successfully!", status: newStatus });
    }
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error", details: err.message });
  }
};

// Retrieve the current status
const getDashboardStatus = async (req, res) => {
  try {
    const status = await DashboardStatus.findOne();
    if (!status) {
      return res.status(404).json({ error: "No status found." });
    }
    res.status(200).json({ status });
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error", details: err.message });
  }
};

// Delete the current status
const deleteDashboardStatus = async (req, res) => {
  try {
    const status = await DashboardStatus.findOne();
    if (!status) {
      return res.status(404).json({ error: "No status to delete." });
    }
    await status.deleteOne();
    res.status(200).json({ message: "Status deleted successfully!" });
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error", details: err.message });
  }
};


const createOrUpdateContactDetails = async (req, res) => {
    console.log("test")
    const { name, mobile } = req.body;
    if (!name || typeof name !== "string" || !mobile || typeof mobile !== "string") {
      return res.status(400).json({ error: "Name and mobile must be valid strings." });
    }
  
    try {
      // Check if contact details already exist
      let existingContact = await ContactDetails.findOne();
  
      if (existingContact) {
        // Update the existing contact details
        existingContact.name = name;
        existingContact.mobile = mobile;
        await existingContact.save();
        return res.status(200).json({ message: "Contact details updated successfully!", contact: existingContact });
      } else {
        // Create new contact details
        const newContact = new ContactDetails({ name, mobile });
        await newContact.save();
        return res.status(201).json({ message: "Contact details created successfully!", contact: newContact });
      }
    } catch (err) {
      res.status(500).json({ error: "Internal Server Error", details: err.message });
    }
  };
  
  // Retrieve the current contact details
  const getContactDetails = async (req, res) => {
    try {
      const contact = await ContactDetails.findOne();
      if (!contact) {
        return res.status(404).json({ error: "No contact details found." });
      }
      res.status(200).json({ contact });
    } catch (err) {
      res.status(500).json({ error: "Internal Server Error", details: err.message });
    }
  };
  
  // Delete the current contact details
  const deleteContactDetails = async (req, res) => {
    try {
      const contact = await ContactDetails.findOne();
      if (!contact) {
        return res.status(404).json({ error: "No contact details to delete." });
      }
      await contact.deleteOne();
      res.status(200).json({ message: "Contact details deleted successfully!" });
    } catch (err) {
      res.status(500).json({ error: "Internal Server Error", details: err.message });
    }
  };
  

module.exports = {
  createOrUpdateDashboardStatus,
  getDashboardStatus,
  deleteDashboardStatus,
  createOrUpdateContactDetails , 
  getContactDetails ,
  deleteContactDetails
};
