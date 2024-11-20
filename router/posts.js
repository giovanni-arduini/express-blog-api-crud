const express = require("express");
const router = express.Router();
const posts = require("../data/posts.js");
const postController = require("../controllers/postController.js");

//index
router.get("/", postController.index);

//show
router.get("/:slug", postController.show);

//store
router.post("/", postController.store);

//update
router.put("/:slug", postController.update);

//modify
router.patch("/:slug", postController.modify);

//destroy
router.delete("/:slug", postController.destroy);

module.exports = router;
