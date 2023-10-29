import  Express from "express";
import { User } from "../models/user.js";
import { getAllUsers, getMyProfile, login, logout, register } from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = Express.Router();

router.get("/all", getAllUsers);


router.post("/register", register);

router.post("/login", login);
router.get("/logout", logout);

router.get("/me", isAuthenticated, getMyProfile);

export default router;