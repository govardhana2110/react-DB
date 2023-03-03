export default (req, res) => {
  res.cookie('logintoken', req.body.token);
  res.statusCode = 200;
  res.json({ success: true });
};
