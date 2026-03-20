/*
import express from "express";

import { clerkMiddleware, requireAuth } from "@clerk/express";

import {
  cancelServiceAppointment,
  confirmServicePayment,
  createServiceAppointment,
  getServiceAppointmentById,
  getServiceAppointmentByPatient,
  getServiceAppointmentByStats,
  getServiceAppointments,
  updateServiceAppointment,
} from "./serviceAppointmentController.js";

//const serviceAppointmentRouter = express.Router();
//serviceAppointmentRouter.get("/", getServiceAppointments);
//serviceAppointmentRouter.get("/confirm", confirmServicePayment);
//se0rviceAppointmentRouter.get("/stats/summary", getServiceAppointmentByStats);

//serviceAppointmentRouter.post(
//  "/",
//  clerkMiddleware(),
//  requireAuth(),
//  createServiceAppointment,
//);

//serviceAppointmentRouter.get(
//  "/me",
//  clerkMiddleware(),
//  requireAuth(),
//  getServiceAppointmentByPatient,
//);

serviceAppointmentRouter.get("/:id", getServiceAppointmentById);
serviceAppointmentRouter.put(":/id", updateServiceAppointment);
serviceAppointmentRouter.post(":/id/cancle", cancelServiceAppointment);


export default serviceAppointmentRouter;
*/

import ServiceAppointment from "../models/serviceAppointment.js";

// CREATE
export const createServiceAppointment = async (req, res) => {
  try {
    const data = req.body;

    const created = await ServiceAppointment.create(data);

    return res.status(201).json({
      success: true,
      appointment: created,
    });
  } catch (err) {
    console.error("createServiceAppointment:", err);
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

// GET ALL
export const getServiceAppointments = async (req, res) => {
  try {
    const items = await ServiceAppointment.find().sort({ createdAt: -1 });

    return res.json({
      success: true,
      appointments: items,
    });
  } catch (err) {
    console.error("getServiceAppointments:", err);
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

// UPDATE
export const updateServiceAppointment = async (req, res) => {
  try {
    const { id } = req.params;

    const updated = await ServiceAppointment.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({
        success: false,
        message: "Appointment not found",
      });
    }

    return res.json({
      success: true,
      appointment: updated,
    });
  } catch (err) {
    console.error("updateServiceAppointment:", err);
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

// CANCEL (IMPORTANT — NAME MATCHES ROUTER)
export const cancelServiceAppointment = async (req, res) => {
  try {
    const { id } = req.params;

    const appt = await ServiceAppointment.findById(id);

    if (!appt) {
      return res.status(404).json({
        success: false,
        message: "Appointment not found",
      });
    }

    appt.status = "Cancelled";
    await appt.save();

    return res.json({
      success: true,
      appointment: appt,
    });
  } catch (err) {
    console.error("cancelServiceAppointment:", err);
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

// PAYMENT (dummy / extend later)
export const confirmServicePayment = async (req, res) => {
  try {
    return res.json({
      success: true,
      message: "Payment confirmed",
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};