const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 8021;

app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get(`/`, (req, res) => {
  // console.log(req)
  res.send("running");
});

app.post(`/`, async (req, res) => {
  console.log(req)
  const url = 'http://23.95.48.230:3020/donate'
  const data = req.body;
  const donate = await axios.post(url, data);
  res.send("success");
});

app.listen(port, function() {
  console.log(`App running on http://localhost:` + port);
});
