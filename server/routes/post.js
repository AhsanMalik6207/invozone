const express = require("express");
  router = express.Router();
const Controller = require("../controllers/post");


router.get("/getAll", Controller.getAll);
router.post("/create",Controller.create);
router.delete("/:postId/delete", Controller.delete);
router.put("/:postId/update",Controller.update);

module.exports = router;
