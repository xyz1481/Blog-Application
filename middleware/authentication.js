const { verifyToken } = require("../serivces/auth");

function checkforCookie(cookieName) {
  return (req, res, next) => {
    const tokencookieValue = req.cookies[cookieName];
    if (!tokencookieValue) return next();
    try {
      const payload = verifyToken(tokencookieValue);
      req.user = payload;
      next();
    } catch (error) {}
  };
}
module.exports = {
  checkforCookie,
};
