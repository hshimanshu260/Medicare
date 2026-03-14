import express from 'express';
import { clerkMiddleware, requireAuth } from '@clerk/express';
import { cancleAppointment, confirmPayment, createAppointment, getAppointments, getAppointmentsByDoctor, getAppointmentsByPatients, getRegisteredUserCount, getStats, updateAppointment } from '../controllers/appointmentControllers.js';

const appointmentRouter = express.Router();
appointmentRouter.get("/",getAppointments);
appointmentRouter.get("/confirm",confirmPayment);
appointmentRouter.get("/stats/summary", getStats);

//suthentic Routes
appointmentRouter.post('/',clerkMiddleware(),requireAuth(),createAppointment);
appointmentRouter.get('/me',clerkMiddleware(), requireAuth(), getAppointmentsByPatients);
appointmentRouter.get("/doctor/:doctorId", getAppointmentsByDoctor);
appointmentRouter.post("/:id/cancle",cancleAppointment);
appointmentRouter.get('/patients/count',getRegisteredUserCount);
appointmentRouter.put("/:id",updateAppointment);

export default appointmentRouter;