// EXPRESS
const express = require("express");
const app = express();
const port = 8000;

app.use(express());

// START SERVER
app.listen(port, () => {
  console.log(`Server listening at : http://localhost${port}`);
});
