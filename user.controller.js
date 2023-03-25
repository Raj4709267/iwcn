const { connection } = require("./backend/db/db");

const userGet = (req, res) => {
  connection.query("SELECT * FROM  note", (err, result) => {
    if (err) {
      res.status(404).json({ message: "Error while storing data" });
    } else {
      res.send({ message: result });
    }
  });
};

module.exports = { userGet };
