const express = require('express');
const router = express.Router();
const signale = require('signale');
const path  = require("path");

router.get("/1", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/html/template_01.html"));
})

router.get("/2", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/html/template_02.html"));
})

router.get("/3", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/html/template_03.html"));
})

router.get("/4", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/html/template_04.html"));
})

module.exports = router;