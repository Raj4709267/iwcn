import { Box, Button, Input, Textarea } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import style from "./NotesAdd.module.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useToast } from "@chakra-ui/react";

function NotesAdd() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();
  const toast = useToast();

  const handleAddNotes = async () => {
    const payload = { title, description };

    dispatch({ type: "API_REQUEST_START" });

    try {
      const res = await axios.post("http://localhost:8000/note", payload);
      await getNotes();
      setDescription("");
      setTitle("");
      dispatch({ type: "API_REQUEST_END" });
    } catch (err) {
      console.log(err);
      dispatch({ type: "API_REQUEST_END" });
    }
  };

  async function getNotes() {
    dispatch({ type: "API_REQUEST_START" });

    try {
      const res = await axios.get("http://localhost:8000/note");
      dispatch({ type: "GET_ALL_NOTES", payload: res.data.message });
      dispatch({ type: "API_REQUEST_END" });
    } catch (err) {
      dispatch({ type: "API_REQUEST_END" });
      console.log(err);
    }
  }

  useEffect(() => {
    getNotes();
  }, []);
  return (
    <>
      <Box className={style.noteadd}>
        <Input
          focusBorderColor="#ffa31a"
          placeholder="Enter Title..."
          _placeholder={{ color: "black" }}
          borderRadius="5px"
          color="black"
          bg="white"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Textarea
          focusBorderColor="#ffa31a"
          placeholder="Enter Description..."
          _placeholder={{ color: "black" }}
          borderRadius="5px"
          bg={"white"}
          color="black"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Button
          color={"white"}
          bgColor="#ffa31a"
          _hover={{ bgColor: "#e5a120" }}
          borderRadius="24px"
          onClick={handleAddNotes}
          isDisabled={title == "" || description == ""}
        >
          Add Note
        </Button>
      </Box>
      {/* <NotesList notes={notes}  /> */}
    </>
  );
}

export default NotesAdd;
