import express from "express";
import * as FrontendPageController from "../app/controllers/FrontendPageController.js";
const router = express.Router();

router.get("/", FrontendPageController.home);
router.get("/about", FrontendPageController.about_page);
router.get("/contact", FrontendPageController.contact_page);
router.get("/file-write", FrontendPageController.file_write);
export default router;
