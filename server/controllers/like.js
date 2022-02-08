const Like = require("../models/like");
exports.like = async function (req, res) {
  try {
    const { postId,userId} = req.params
    return Like
      .create({
        postId,
        userId
      })
      .then(like => res.status(201).send({
        message: `Your have liked the post`,
        like
      }))
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};


exports.unlike = async function (req, res) {
  try {
    return Like
          .findByPk(req.params.likeId)
          .then(like => {
            return like
              .destroy()
              .then(() => res.status(200).send({
                message: 'You have unliked the post that you liked before'
              }))
              .catch(error => res.status(400).send(error));
          })
          .catch(error => res.status(400).send(error))
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};