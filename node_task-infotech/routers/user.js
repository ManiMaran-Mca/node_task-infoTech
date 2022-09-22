import express from "express";
import { login,reg, getAll} from "../controller/user.js";

const router=express.Router()

router.get("/getAll",getAll)
router.post("/register",reg)
router.post("/login",login)

export default router