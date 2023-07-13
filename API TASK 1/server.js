const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/numbers", require("./routes/numbers"));

app.listen(PORT, () => {
  console.log(`App started at http://localhost:${PORT}`);
});
