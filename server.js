const express = require("express");
const app = express();

app.get("/test", (req, res) => {
  res.status(200).json({ success: true });
});

app.listen(3000, () => console.log("server is running on port 3000"));
