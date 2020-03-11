const express = require("express");
const router = express.Router();
const Posts = require("../data/db");

router.post("/", (req, res) => {
  Posts.insert(req.body)
    .then((response) => {
      if (!req.body.title || !req.body.contents) {
        res.status(400).json({
          errorMessage: "Please provide title and contents for the post."
        });
      } else if (req.body.title && req.body.contents) {
        res.status(201).json({ ...response, ...req.body });
      }
    })
    .catch((error) => {
      res.status(500).json({
        error: "There was an error while saving the post to the database"
      });
    });
});

router.post("/:id/comments", (req, res) => {
  Posts.insertComment(req.body)
    .then((response) => {
      if (!req.body.post_id) {
        res.status(404).json({
          errorMessage: "Please provide title and contents for the post."
        });
      } else if (!req.body.text) {
        res
          .status(400)
          .json({ errorMessage: "Please provide text for the comment." });
      } else if (req.body.text && req.body.post_id) {
        res.status(201).json(req.body);
      }
    })
    .catch((error) => {
      res.status(500).json({
        error: "There was an error while saving the post to the database"
      });
    });
});

router.get("/", (req, res) => {
  Posts.find()
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((error) => {
      res
        .status(500)
        .json({ error: "The posts information could not be retrieved." });
    });
});

module.exports = router;
