const express = require("express");
const app = express();
const port = 3000;
const postsRouter = require("./router/posts");

app.use(express.static("public"));

app.use(express.json());

app.get("/", (req, res) => {
  console.log("root");
  res.send("Ciao mondo!");
});

app.use("/posts", postsRouter);

app.listen(port, () => {
  console.log(`Server is listening to port: ${port}`);
});
