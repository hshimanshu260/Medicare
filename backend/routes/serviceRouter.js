/*
import express from 'express';
import multer from 'multer';
//import express from "express";
import {
  createServiceAppointment,
  cancelServiceAppointment,
  getServiceAppointments,
  updateServiceAppointment,
  confirmPayment,
} from "../controllers/serviceAppointmentController.js";

const router = express.Router();

router.get("/", getServiceAppointments);
router.post("/", createServiceAppointment);
router.post("/:id/cancel", cancelServiceAppointment);
router.put("/:id", updateServiceAppointment);

import { createService, deleteService, getServices, getServicesById, updateService } from '../controllers/serviceController.js';

const upload = multer({dest:"/temp"});
const serviceRouter = express.Router();

serviceRouter.get("/",getServices);
serviceRouter.get("/:id",getServicesById);

serviceRouter.post('/',upload.single("image"),createService);
serviceRouter.put("/:id", upload.single("image"),updateService);

serviceRouter.delete("/:id",deleteService);

export default serviceRouter;
*/
import express from "express";

import {
  createServiceAppointment,
  cancelServiceAppointment,
  getServiceAppointments,
  updateServiceAppointment,
  confirmServicePayment,
} from "../controllers/serviceAppointmentController.js";

const router = express.Router();

// Routes
router.get("/", getServiceAppointments);
router.post("/", createServiceAppointment);
router.post("/:id/cancel", cancelServiceAppointment);
router.put("/:id", updateServiceAppointment);
router.get("/confirm", confirmServicePayment);

export default router;