const registerUser = (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please include all fields");
  }

  res.send("register route");
};

const loginUser = (req, res) => {
  res.send("login route");
};

module.exports = {
  loginUser,
  registerUser,
};
