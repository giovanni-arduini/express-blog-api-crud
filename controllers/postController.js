const posts = require("../data/posts.js");

// Functions

//index
function index(req, res) {
  console.log("Ecco la lista dei post");
  res.json(posts);
}

//show
function show(req, res) {
  const slug = req.params.slug;
  let result = posts;

  console.log(`Ecco il post con slug ${slug}`);
  result = posts.find((p) => p.slug === slug);

  if (!posts) {
    res.status(404);
    result = {
      error: "Post not found",
      message: "Il post non è stato trovato",
    };
  }

  res.json(result);
}

//store
function store(req, res) {
  res.send("Crea un nuovo post!");
}

//modify
function modify(req, res) {
  const slug = req.params.slug;
  res.send(`Aggiorna il post con slug ${slug}`);
}

//update
function update(req, res) {
  const slug = req.params.slug;
  res.send(`Modifica il post con slug ${slug}`);
}

//destroy
function destroy(req, res) {
  const slug = req.params.slug;
}

module.exports = { index, show, store, modify, update, destroy };
