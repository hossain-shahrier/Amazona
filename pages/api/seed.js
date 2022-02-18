import nc from "next-connect";
//Utils
import db from "../../utils/db";
import data from "../../utils/data";
// Models
import Product from "../../models/Product";
import User from "../../models/User";

const handler = nc();

handler.get(async (req, res) => {
  await db.connect();
  //   Delete All previous data before inserting items
  await Product.deleteMany();
  //   Insert Data
  await Product.insertMany(data.products);
  //   Delete All previous data before inserting items
  await User.deleteMany();
  //   Insert Data
  await User.insertMany(data.users);
  await db.disconnect();
  res.send({ message: "Seeded successfully" });
});

export default handler;
