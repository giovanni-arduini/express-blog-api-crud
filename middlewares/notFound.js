function notFound(req, res) {
  const post = posts.find((post) => post.id === id);
  if (!post) {
    res.status(404).json({
      error: "not found",
      message: "Post non trovato",
    });
  }
}

module.exports = notFound;
