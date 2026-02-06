import express from "express"
import { registerUser,verification,loginUser,logoutUser } from "../controllers/userControllers.js"
import { isAuthenticated } from "../middleware/isAuthenticated.js";
import { userSchema, validateUser } from "../validators/userValidate.js"

const router = express.Router()

router.post('/register',validateUser(userSchema), registerUser);
router.post('/verify', verification);
router.post('/login', loginUser);
router.post('/logout',isAuthenticated, logoutUser);

export default router;