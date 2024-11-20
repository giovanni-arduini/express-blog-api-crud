const posts = require("../data/posts.js");

// Functions

//index
function index(req, res) {
  //   const tag = req.query.tags;
  let taggedPosts = posts;

  if (req.query.tags) {
    console.log(`Ecco la lista dei post con il tag: ${req.query.tags}`);
    const taggedPosts = posts.filter((post) => {
      post.tags.includes(req.query.tags);
    });
    console.log(taggedPosts);
    return res.json(taggedPosts);
  }

  res.json(taggedPosts);
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

  const postIndex = posts.findIndex((posts) => posts.slug === slug);

  if (postIndex === -1) {
    res.status(404);
    result = {
      error: "Post not found",
      message: "Il post non è stato trovato",
    };
    res.send(result);

    return;
  }

  posts.splice(postIndex, 1);

  console.log(posts);
  console.log(`Elimina il post con slug ${slug}`);
  res.sendStatus(204);
}

module.exports = { index, show, store, modify, update, destroy };
