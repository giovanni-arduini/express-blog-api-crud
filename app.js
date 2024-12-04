const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;
const postsRouter = require("./router/posts");
const notFound = require("./middlewares/notFound");
const errorHandler = require("./middlewares/errorHandler");

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.static("public"));

app.use(express.json());

app.get("/", (req, res) => {
  console.log("root");
  throw new Error("Errore simulato");
  res.send("Ciao mondo!");
});

app.use("/posts", postsRouter);

app.use(errorHandler);

app.use(notFound);

app.listen(port, () => {
  console.log(`Server is listening to port: ${port}`);
});
