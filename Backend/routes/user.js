const express = require('express');
const router  = express.Router();
const {handleSignIn, handleSignUp, handleLogout, authVerify} = require('../controllers/user')

router.post("/signup",handleSignUp);
router.post("/signin",handleSignIn);
router.get('/auth',authVerify);
router.post('/logout',handleLogout)

module.exports=router;