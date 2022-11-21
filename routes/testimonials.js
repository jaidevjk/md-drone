
const express =require("express");
const router  = express.Router();
const testimonials =require('../controller/testimonialController');


router.post("/",testimonials.createTestimonial);
router.get("/",testimonials.fetchTestimonial);
router.delete("/:id",testimonials.deleteTestimonial);

module.exports = router;