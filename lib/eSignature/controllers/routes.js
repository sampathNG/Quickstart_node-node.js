const express = require("express");
const router = express.Router();
const xcv = require("./eg001EmbeddedSigning");
router.get("/hel", xcv.hello);
router.get("/pdf", xcv.pdf);
router.delete("/pdf", xcv.del);
router.post("/irs", xcv.irs);
module.exports = router;
