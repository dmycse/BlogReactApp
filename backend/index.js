import express from "express";

const app = express();

app.get("/test", (req, res) => {
  res.status(200).send("It works!");
})

app.listen(3000, () => {
  console.log('\x1b[36m%s\x1b[0m', "Server is running. Port: 3000");
});