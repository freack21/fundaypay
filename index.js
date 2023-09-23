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

app.all(`/downscrap/:type`, async (req, res) => {
    const { type } = req.params;
    const { url } = req.query;
    const urls = `http://23.95.48.230:2121/${type}?url=${url}`;
    const response = await axios.get(urls);
    res.status(200).json(response.data);
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
    const sender = await axios.post(url, data);
    res.send(sender);
});

app.get(`/send`, async (req, res) => {
    const url = "http://23.95.48.230:3020/send";
    // const { msg, to, img, ext } = req.query;
    const data = req.query;
    const sender = await axios.post(url, data);
    res.send(sender);
});

app.listen(port, function () {
    console.log(`App running on http://localhost:` + port);
});
