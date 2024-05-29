import  express  from "express";
import { mess } from "../controller/messaage.controller.js";
const router=express.Router();
router.post("/contact",mess);
export default router;





