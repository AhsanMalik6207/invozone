const express = require("express");
  router = express.Router();
const Controller = require("../controllers/post");
const checkAuthMiddleware = require('../middleware/check-auth');

router.get("/getAll",  Controller.getAll);
router.post("/create",checkAuthMiddleware.checkAuth,Controller.create);
router.delete("/:postId/delete", checkAuthMiddleware.checkAuth,Controller.delete);
router.put("/:postId/update",checkAuthMiddleware.checkAuth,Controller.update);

module.exports = router;
