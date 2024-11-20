// Functions

//index
function index(req, res) {
  console.log("Ecco la lista dei post");
  res.json(posts);
}

//show
function show(req, res) {
  const slug = req.params.slug;
  console.log(`Ecco il post con slug ${slug}`);
  const post = posts.find((p) => p.slug === slug);
  res.json(post);
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
  res.send(`Elimina il post con slug ${slug}`);
}
