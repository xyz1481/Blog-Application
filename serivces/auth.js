const jwt = require("jsonwebtoken");
const secret_key = "$@!#%^&*()+_";
function generateToken(user) {
  const payload = {
    _id: user._id,
    email: user.email,
    proflieImageUrRL: user.proflieImageUrRL,
    role: user.role,
  };
  const token = jwt.sign(payload, secret_key);
  return token;
}

function verifyToken(token) {
  try {
    const payload = jwt.verify(token, secret_key);
    return payload;
  } catch (error) {
    return res.end("error : token not verified");
  }
}

module.exports = {
  generateToken,
  verifyToken,
};
