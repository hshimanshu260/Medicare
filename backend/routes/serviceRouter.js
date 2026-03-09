import express from 'express';
import multer from 'multer';

import { createService, getServices, getServicesById } from '../controllers/serviceController.js';

const upload = multer({dest:"/temp"});
const serviceRouter = express.Router();

serviceRouter.get("/",getServices);
serviceRouter.get("/:id",getServicesById);

serviceRouter.post('/',upload.single("image"))