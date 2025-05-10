const express = require('express');
const router  = express.Router();
const {handleGenerateShortUrl, handleRedirection,handleAllUserLinks} = require("../controllers/url")

router.post("/",handleGenerateShortUrl);
router.get("/all", handleAllUserLinks);
router.get("/:shortid",handleRedirection);


module.exports=router;