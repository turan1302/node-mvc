import express from 'express'
import * as pageController from '../controllers/pageController.js'

const router = express.Router();

router.route("/").get(pageController.homeController);
router.route("/about").get(pageController.aboutController);
router.route("/contact").get(pageController.contactController);

export default router;