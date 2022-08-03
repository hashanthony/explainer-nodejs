const signale = require("signale");
const express = require("express");
const app = express();
const templateRouter = require("./routes/template");
const port = process.env.PORT || 3000;
const path  = require("path");

app.use("/template", templateRouter);
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/html/index.html"));
});

app.listen(port, () => {
    signale.info("Listening at http://localhost:%d", port);
})