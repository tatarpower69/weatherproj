exports.getProfile = async (req, res, next) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    res.json(req.user);
  } catch (err) {
    next(err);
  }
};

exports.updateProfile = async (req, res, next) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    if (req.body.username) {
      req.user.username = req.body.username;
    }

    if (req.body.email) {
      req.user.email = req.body.email;
    }

    await req.user.save();

    res.json(req.user);
  } catch (err) {
    next(err);
  }
};
