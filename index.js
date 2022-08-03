const signale = require("signale");
const express = require("express");
const app = express();
const path  = require("path");

const port = process.env.PORT || 3000;

// app.use("/template", templateRouter)

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/html/index.html"));
});

app.listen(port, () => {
    signale.info("Listening at http://localhost:%d", port);
})