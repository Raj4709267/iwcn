const { connection } = require("../db/db");

const noteAdd = async (req, res) => {
  const { title, description } = req.body;
  if (!title || !description) {
    res.status(404).json({ message: "Fill all the detials" });
  } else {
    const sqlInserQuery = `INSERT INTO note (title,description) VALUES ('${title}', '${description}')`;
    connection.query(sqlInserQuery, (err, resolve) => {
      if (err) {
        res.status(404).json({ message: "Error while storing data" });
      } else {
        res.send({ message: "Data stored successfully" });
      }
    });
  }
};

const getNotes = (req, res) => {
  const sqlQueryForGetNotes = `SELECT * FROM note ORDER BY id DESC`;
  connection.query(sqlQueryForGetNotes, (err, resolve) => {
    if (err) {
      res.status(404).json({ message: "Error while getting data" });
    } else {
      res.send({ message: resolve });
    }
  });
};

const deleteNote = (req, res) => {
  const id = req.params.id;
  const sqlQueryForDeleteNote = `DELETE FROM note WHERE id = ${id};`;
  connection.query(sqlQueryForDeleteNote, (err, resolve) => {
    if (err) {
      res.status(404).json({ message: "Error while getting data" });
    } else {
      res.send({ message: resolve });
    }
  });
};

const updateNote = (req, res) => {
  const id = req.params.id;
  const { title, description } = req.body;

  const sql = `UPDATE note SET title=?, description=? WHERE id=?`;

  connection.query(sql, [title, description, id], (error, results, fields) => {
    if (error) {
      return res.status(404).json({ message: "Failed to update note" });
    }
    return res.send({ message: "Record updated successfully" });
  });
};

module.exports = { noteAdd, getNotes, deleteNote ,updateNote};
