const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 8020;

app.use(cors());
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);

app.get(`/`, (req, res) => {
    res.send("running");
});

app.post(`/`, async (req, res) => {
    const url = "http://23.95.48.230:3020/donate";
    const data = req.body;
    const donate = await axios.post(url, data);
    res.status(200).send("success");
});

app.post(`/send`, async (req, res) => {
    const url = "http://23.95.48.230:3020/send";
    const data = req.body;
    res.status(200).send("success");
    const sender = await axios.post(url, data);
});

app.listen(port, function () {
    console.log(`App running on http://localhost:` + port);
});
