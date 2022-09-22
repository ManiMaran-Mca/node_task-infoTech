import express from "express";
import { add,getAll,getById,updateBook,deleteBook} from "../controller/book.js";
import auth from "../middleware/auth.js";
import verifyAdmin from "../middleware/verifyAdmin.js";

const router=express.Router()

router.post("/add",[auth,verifyAdmin],add)
router.get("/getAll",getAll)
router.get("/get/:id",getById)
router.put("/updatebook/:id",[auth,verifyAdmin],updateBook)
router.delete("/deletebook/:id",[auth,verifyAdmin],deleteBook)

export default router