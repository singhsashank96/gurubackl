const mongoose = require("mongoose");

const DashboardStatusSchema = new mongoose.Schema(
  {
    status: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

const DashboardStatus = mongoose.model("DashboardStatus", DashboardStatusSchema);

module.exports = DashboardStatus;
