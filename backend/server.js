/*
import express from 'express';
import cors from 'cors';
//import 'dotenv/config';
import dotenv from "dotenv";
dotenv.config({ path: "./backend/.env" });
//import connectDB from "./config/db.js";

import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config({ path: "./backend/.env" });

import connectDB from "./config/db.js";

connectDB();
import { clerkMiddleware } from '@clerk/express'
import { connectDB } from './config/db.js';
import doctorRouter from './routes/doctorRouter.js';
//import serviceRouter from './routes/serviceRouter.js';
import appointmentRouter from './routes/appointmentRouter.js';
//import serviceAppointmentRouter from './controllers/serviceAppointmentController.js';
import serviceRouter from "./routes/serviceRouter.js";



const app = express();
app.use("/api/services", serviceRouter);
const port = 4000;

const  allowedOrigins = [
    "http://localhost:5173/",
    "http://localhost:5174/"
];

//Middlewares
app.use(cors(
    {
        origin: function(origin,callback){
            if(!origin) return callback(null,true);
            if(allowedOrigins.includes(origin)) {
                return callback(null,true)
            }
            return callback(new Error("Not allowed by CORS"));
        },
        credentials: true,
        methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
        allowedHeaders: ["Content-Type", "Authorization"]
    }
));
app.use(clerkMiddleware());
app.use(express.json({limit:"20mb"}));
app.use(express.urlencoded({limit:"20mb",extended:true}));

//DB
connectDB();
//Routes
app.use("/api/doctors",doctorRouter);
app.use("/api/services",serviceRouter);
app.use("/api/appointments",appointmentRouter);
//app.use("/api/service-appointments",serviceAppointmentRouter);

app.get('/',(req,res) => {
    res.send("API WORKING");
});

app.listen(port, () =>{
    console.log(`Server Started on http://localhost:${port}`);
})


import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config({ path: "./backend/.env" });

import connectDB from "./config/db.js";
import { clerkMiddleware } from "@clerk/express";

import doctorRouter from "./routes/doctorRouter.js";
import appointmentRouter from "./routes/appointmentRouter.js";
import serviceRouter from "./routes/serviceRouter.js";

const app = express();
const port = 4000;

// ✅ CONNECT DB (ONLY ONCE)
connectDB();

// ✅ CORS
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5174",
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) return callback(null, true);
    return callback(new Error("Not allowed by CORS"));
  },
  credentials: true,
}));

// ✅ MIDDLEWARES
app.use(clerkMiddleware());
app.use(express.json({ limit: "20mb" }));
app.use(express.urlencoded({ extended: true }));

// ✅ ROUTES
app.use("/api/doctors", doctorRouter);
app.use("/api/services", serviceRouter);
app.use("/api/appointments", appointmentRouter);

// ✅ TEST ROUTE
app.get("/", (req, res) => {
  res.send("API WORKING");
});

// ✅ START SERVER
app.listen(port, () => {
  console.log(`Server Started on http://localhost:${port}`);
});
*/
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

// ✅ Load env
//dotenv.config({ path: "./backend/.env" });
//dotenv.config({ path: "./backend/.env", quiet: true });
//dotenv.config({ quiet: true });
dotenv.config({ path: "../.env", quiet: true });

// ✅ Imports
import connectDB from "./config/db.js";
import { clerkMiddleware } from "@clerk/express";

import doctorRouter from "./routes/doctorRouter.js";
import appointmentRouter from "./routes/appointmentRouter.js";
import serviceRouter from "./routes/serviceRouter.js";

const app = express();
const port = 4000;

// ✅ CORS CONFIG
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5174",
];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      return callback(null, true);
    }
    return callback(new Error("Not allowed by CORS"));
  },
  credentials: true,
}));

// ✅ MIDDLEWARES
app.use(clerkMiddleware());
app.use(express.json({ limit: "20mb" }));
app.use(express.urlencoded({ extended: true }));

// ✅ ROUTES
app.use("/api/doctors", doctorRouter);
app.use("/api/services", serviceRouter);
app.use("/api/appointments", appointmentRouter);

// ✅ TEST ROUTE
app.get("/", (req, res) => {
  res.send("API WORKING");
});

// ✅ START SERVER ONLY AFTER DB CONNECTS
const startServer = async () => {
  try {
    await connectDB(); // 🔥 wait for DB

    app.listen(port, () => {
      console.log(`Server Started on http://localhost:${port}`);
    });

  } catch (error) {
    console.log("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();