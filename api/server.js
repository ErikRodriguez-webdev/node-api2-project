const express = require("express");

const postsRouter = require("../posts/postsRouter");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.send("API IS UP");
});

//Endpoints from Router
server.use("/api/posts", postsRouter);

module.exports = server;
