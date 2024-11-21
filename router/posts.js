const express = require("express");
const router = express.Router();
const posts = require("../data/posts.js");
const postController = require("../controllers/postController.js");

//index
router.get("/", postController.index);

//show
router.get("/:identifier", postController.show);

//store
router.post("/", postController.store);

//update
router.put("/:id", postController.update);

//modify
router.patch("/:id", postController.modify);

//destroy
router.delete("/:id", postController.destroy);

module.exports = router;
