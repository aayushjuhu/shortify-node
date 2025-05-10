const shortId = require('shortid');
const QRCode = require('qrcode')
const url = require("../models/url");
const user = require('./user');
const jwt = require('jsonwebtoken');
const secret = "@ancdf#";

async function handleGenerateShortUrl(req, res) {
    const body = req.body;
    if(!req.body) return res.status(400).json({"error":"Url required"});
    const shortID = shortId(8);
    const token = req.cookies?.uid;
    const useremail = jwt.verify(token,secret);
    const qrurl= await QRCode.toDataURL("http://localhost:8000/short/"+shortID);
    await url.create({
        shortId:shortID,
        redirectURL:body.url,
        email:useremail.email,
        qr:qrurl
    });
    return res.json({"shortid":shortID, "qrurl":qrurl});
}

async function handleRedirection(req, res) {
    const sid = req.params.shortid;
    const result = await url.findOne({shortId:sid});
    if(!result) return res.status(500).json({"error":"ShortUrl not found"})
    return res.redirect(result.redirectURL);
}

async function handleAllUserLinks(req, res) {
    const token = req.cookies?.uid;
    const user = jwt.verify(token,secret);
    const result = await url.find({email:user.email});
    if(!result) return res.status(500).json({"error":"error"});
    return res.status(200).json(result);
}

module.exports={handleGenerateShortUrl, handleRedirection,handleAllUserLinks};