const User = require('../models/User');

module.exports = {
  async create(req, res) {
    const { name, email, pictureUrl } = req.body;
    const user = await User.create({
      name,
      email,
      pictureUrl
    });
    return res.json(user).status(200);
  },

  async listener(req, res) {
    const users = await User.findAll()
    return res.json({ users }).status(200);
  },

  async show(req, res) {
    const { name } = req.params;
    const users = await User.findOne({
      where: {
        name: name
      }
    })
    return res.json({ users }).status(200);
  },

  async updated(req, res) {
    const { name, email, pictureUrl } = req.body;
    const user = await User.findOne({
      where: {
        name: name
      }
    });
    user.name = name;
    user.email = email;
    user.pictureUrl = pictureUrl;

    await user.save();

    return res.json(user).status(200);
  },
  async deleted(req, res) {
    const { name } = req.params;
    await User.destroy({
      where: {
        name: name
      }
    })
    return res.status(200);
  },

}