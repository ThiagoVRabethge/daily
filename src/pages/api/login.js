const login = (req, res) => {
  try {
    res.status(200).json(req.body);
  } catch (error) {
    res.status(400).json(error);
  }
}

export default login;