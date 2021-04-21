const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

app.use(express.static(path.resolve(__dirname, "../../public")));

app.get("/", (req, res) => {
  console.log();
  res.sendFile(path.resolve(__dirname, "../../dist/index.html"));
});

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
