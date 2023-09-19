const express = require("express");
const router = express.Router();

const {
    getAllServices,
    addNewService,
    deleteService,
    addNewUser,
    getAllUsers,
    getAllUsersDesc
} = require("../controllers/mainController");

router.get("/memberships", getAllServices);
router.post("/memberships", addNewService);
router.delete("/memberships/:id", deleteService);
router.get("/users", getAllUsers);
router.get("/usersDesc", getAllUsersDesc);
router.post("/users", addNewUser);

module.exports = router;