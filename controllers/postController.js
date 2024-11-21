const posts = require("../data/posts.js");

// Functions

//index
function index(req, res) {
  const tag = req.query.tags;
  let taggedPosts = posts;

  if (tag) {
    console.log(`Ecco la lista dei post con il tag: ${tag}`);
    taggedPosts = posts.filter((post) => {
      post.tags.includes(tag);
    });
    console.log(taggedPosts);
  }

  res.json(taggedPosts);
}

//show
function show(req, res) {
  const identifier = req.params.identifier;
  let result;

  console.log(`Ecco il post con identificativo ${identifier}`);

  if (!isNaN(identifier)) {
    identifier = parseInt(identifier);
    result = posts.find((post) => post.id === identifier);
  } else {
    result = posts.find((post) => post.slug === identifier);
  }

  if (!result) {
    res.status(404);
    result = {
      error: "No post found",
      mesasge: "Nessun post trovato!",
    };
  }

  res.json(result);
}

//store
function store(req, res) {
  const newId = posts[posts.length - 1].id + 1;
  console.log(newId);

  const newPost = {
    id: newId,
    title: req.body.title,
    slug: req.body.slug,
    content: req.body.content,
    image: req.body.image,
    tags: req.body.tags,
  };

  posts.push(newPost);
  console.log(posts);

  res.status(201);
  res.json(newPost);
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
