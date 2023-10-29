import express from "express";
import { AddFreq, createCalendarUser, getCalendarData } from "../controllers/calendar.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.put("/AddFreq/:count",isAuthenticated, AddFreq);
router.post("/createData",isAuthenticated, createCalendarUser);
router.get("/getCalendarData",isAuthenticated, getCalendarData);

export default router;