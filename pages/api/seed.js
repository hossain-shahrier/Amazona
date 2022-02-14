import nc from "next-connect";
//Utils
import db from "../../utils/db";
import data from "../../utils/data";
// Model
import Product from "../../models/Product";

const handler = nc();

handler.get(async (req, res) => {
  await db.connect();
  //   Delete All previous data before inserting items
  await Product.deleteMany();
  //   Insert Data
  await Product.insertMany(data.products);
  await db.disconnect();
  res.send({ message: "Seeded successfully" });
});

export default handler;
