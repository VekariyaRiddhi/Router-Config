require("dotenv").config();
require("./db");
const express = require("express");
const { userRouter } = require("./routes/user");

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.use("/users", userRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
