
const express =require("express");
const router  = express.Router();
const iframelinks =require('../controller/iframelinksController');


router.post("/",iframelinks.createIframelinks);
router.get("/",iframelinks.fetchIframelinks);
router.delete("/:id",iframelinks.deleteIframelinks);

module.exports = router;