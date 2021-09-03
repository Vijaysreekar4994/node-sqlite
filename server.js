const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const db = require("./db/table");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/oa_trf_src", async (req, res) => {
  try {
    const list = await db.getAll();
    res.status(200).json({ list });
  } catch (error) {
    console.log("error", error);
  }
});

app.get("/oa_trf_src/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const list = await db.getOne(id);
    res.status(200).json({ list });
  } catch (error) {
    console.log("error", error);
  }
});

app.get("/test", (req, res) => {
  res.status(200).json({ success: true });
});

app.listen(3000, () => console.log("server is running on port 3000"));
