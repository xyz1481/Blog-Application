const { Schema, model } = require("mongoose");
const { type } = require("os");
const crypto = require("crypto");
const { generateToken } = require("../serivces/auth");
const userSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    salt: {
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
    profileImageUrl: {
      type: String,
      default: "/default.png",
    },
    role: {
      type: String,
      enum: ["USER", "ADMIN"],
      default: "USER",
    },
  },
  { timestamps: true }
);

//User save
userSchema.pre("save", function (next) {
  const user = this;
  if (!user.isModified("password")) return;

  const salt = crypto.randomBytes(16).toString();
  const hashedPassword = crypto
    .createHmac("sha256", salt)
    .update(user.password)
    .digest("hex");

  this.salt = salt;
  this.password = hashedPassword;
  next();
});

userSchema.static(
  "matchPasswordAndGenerateToken",
  async function (email, password) {
    const user = await this.findOne({ email });
    if (!user) throw new Error("user not found!");
    const salt = user.salt;
    userProvidedHash = user.password;
    const hashedPassword = crypto
      .createHmac("sha256", salt)
      .update(password)
      .digest("hex");
    if (hashedPassword != userProvidedHash)
      throw new Error("Incorrect Password");
    const token = generateToken(user);
    return token;
  }
);
const User = model("user", userSchema);

module.exports = User;
