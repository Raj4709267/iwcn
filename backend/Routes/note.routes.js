const express = require("express");
const { noteAdd, getNotes, deleteNote, updateNote } = require("../controller/note.controller");

const noteRoute=express.Router();


noteRoute.get("/",getNotes)
noteRoute.post("/",noteAdd)
noteRoute.delete("/:id",deleteNote)
noteRoute.put("/:id",updateNote)

module.exports={noteRoute}

