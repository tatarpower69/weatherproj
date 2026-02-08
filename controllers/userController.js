exports.getProfile = async (req, res) => {
  res.json(req.user);
};

exports.updateProfile = async (req, res, next) => {
  try {
    if (req.body.username)
      req.user.username = req.body.username;

    if (req.body.email)
      req.user.email = req.body.email;

    await req.user.save();

    res.json(req.user);
  } catch (err) {
    next(err);
  }
};
