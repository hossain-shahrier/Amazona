import db from "../../../utils/db";
import nc from "next-connect";
import User from "../../../models/User";
// bcrypt
import bcrypt from "bcrypt";
import { signToken } from "../../../utils/auth";
const handler = nc();

handler.post(async (req, res) => {
  const saltRounds = 10;
  const salt = bcrypt.genSaltSync(saltRounds);
  await db.connect();
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, salt),
    isAdmin: false,
  });
  const user = await newUser.save()
  await db.disconnect();

  const token = signToken(user);
  res.send({
    token,
    _id: user._id,
    name: user.name,
    email: user.email,
    isAdmin: user.isAdmin,
  });
});

export default handler;
