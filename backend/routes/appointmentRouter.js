/*import express from 'express';
import { clerkMiddleware, requireAuth } from '@clerk/express';
import { cancelServiceAppointment, confirmPayment, createAppointment, getAppointments, getAppointmentsByDoctor, 
    getAppointmentsByPatients, getRegisteredUserCount, getStats, updateAppointment } from '../controllers/appointmentControllers.js';

const appointmentRouter = express.Router();
appointmentRouter.get("/",getAppointments);
appointmentRouter.get("/confirm",confirmPayment);
appointmentRouter.get("/stats/summary", getStats);

//suthentic Routes
appointmentRouter.post('/',clerkMiddleware(),requireAuth(),createAppointment);
appointmentRouter.get('/me',clerkMiddleware(), requireAuth(), getAppointmentsByPatients);
appointmentRouter.get("/doctor/:doctorId", getAppointmentsByDoctor);
appointmentRouter.post("/:id/cancel", cancelServiceAppointment);
appointmentRouter.get('/patients/count',getRegisteredUserCount);
appointmentRouter.put("/:id",updateAppointment);

export default appointmentRouter;
*/

import express from "express";
import { clerkMiddleware, requireAuth } from "@clerk/express";

import {
  cancelServiceAppointment, // you used this name
  confirmPayment,
  createAppointment,
  getAppointments,
  getAppointmentsByDoctor,
  getAppointmentsByPatients,
  getRegisteredUserCount,
  getStats,
  updateAppointment,
} from "../controllers/appointmentControllers.js";

const appointmentRouter = express.Router();

// Public routes
appointmentRouter.get("/", getAppointments);
appointmentRouter.get("/confirm", confirmPayment);
appointmentRouter.get("/stats/summary", getStats);

// Protected routes
appointmentRouter.post(
  "/",
  clerkMiddleware(),
  requireAuth(),
  createAppointment
);

appointmentRouter.get(
  "/me",
  clerkMiddleware(),
  requireAuth(),
  getAppointmentsByPatients
);

appointmentRouter.get("/doctor/:doctorId", getAppointmentsByDoctor);

// Cancel
appointmentRouter.post("/:id/cancel", cancelServiceAppointment);

// Others
appointmentRouter.get("/patients/count", getRegisteredUserCount);
appointmentRouter.put("/:id", updateAppointment);

export default appointmentRouter;