import db from "./db";

const getError = (err) => {
  err.reponse && err.reponse.data && err.reponse.data.message
    ? err.reponse.data.message
    : err.message;
};
const onError = async (err, req, res, next) => {
  await db.disconnect();
  res.status(500).send({ message: err.toString() });
  next();
};
export { getError, onError };
