const express = require("express");
const router = express.Router();
const {
    createOrUpdateDashboardStatus , getDashboardStatus   , deleteDashboardStatus

} = require("../Controllers/dashboard_controller");

router.post("/",createOrUpdateDashboardStatus );
router.get("/", getDashboardStatus );
router.delete("/", deleteDashboardStatus);



module.exports = router;
