const express = require("express");
const router = express.Router();

const {
    getAllServices,
    addNewService
} = require("../controllers/mainController");


router.get("/memberships", getAllServices)
router.post("/memberships", addNewService)




module.exports = router;