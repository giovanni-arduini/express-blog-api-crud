const express = require("express");
const router = express.Router();
const posts = require("../data/posts.js");
const postController = require("../controllers/postController.js");

//index
router.get("/", postController.index);

router.get(
  "/:id([0-9]+)",
  (req, res, next) => {
    req.params.id = parseInt(req.params.id);
    next();
  },
  postController.show("id")
);

router.get("/:slug", postController.show("slug"));

// router.get("/:id([0-9]+)", (req, res) => {
//   res.json({
//     id: req.params.id,
//   });
// });

// router.get("/:slug", (req, res) => {
//   res.json({
//     slug: req.params.slug,
//   });
// });

//show
// router.get("/:identifier", postController.show);

//store
router.post("/", postController.store);

//update
router.put("/:id", postController.update);

//modify
router.patch("/:id", postController.modify);

//destroy
router.delete("/:id", postController.destroy);

module.exports = router;
