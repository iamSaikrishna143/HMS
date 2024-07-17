import express from "express";
import {
  deleteAppointment,
  getAllAppointment,
  postAppointment,
  updateAppointmentStatus,
} from "../controller/appointmentController.js";
import {
  isPatientAuthenticated,
  isAdminAuthenticated,
} from "../middlewares/auth.js";

const router = express.Router();

router.post("/post", isPatientAuthenticated, postAppointment);
router.get("/getall", isAdminAuthenticated, getAllAppointment);
router.put("/update/:id", isAdminAuthenticated, updateAppointmentStatus);
router.put("/delete/:id", isAdminAuthenticated, deleteAppointment);

export default router;
