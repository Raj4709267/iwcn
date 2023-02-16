import { Box, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import style from "./NotesList.module.css";
import { DeleteIcon } from "@chakra-ui/icons";
import { ViewFull } from "../Modals/ViewFull";
import { Edit } from "../Modals/Edit";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { getNotes } from "../NotesAdd/NotesAdd";

function NotesList() {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.AppReducer.notes);

  const handleDelete = async (id) => {
    dispatch({ type: "API_REQUEST_START" });
    try {
      const res = await axios.delete(`http://localhost:8000/note/${id}`);
      getNotes();
      dispatch({ type: "API_REQUEST_END" });
    } catch (err) {
      dispatch({ type: "API_REQUEST_END" });
      console.log(err);
    }
  };

  async function getNotes() {
    try {
      const res = await axios.get("http://localhost:8000/note");
      dispatch({ type: "GET_ALL_NOTES", payload: res.data.message });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Box className={style.noteslist}>
      {notes.length > 0 &&
        notes.map((item) => {
          return (
            <Box
              key={item.id}
              bgColor={"#333333"}
              width="100%"
              marginTop={"5px"}
              textAlign="left"
              padding={"20px"}
            >
              <Text
                fontSize={"24px"}
                fontWeight="bold"
                textAlign={"left"}
                margin={"0 0 16px 0"}
                color="#ffa31a"
              >
                {item.title}
              </Text>
              <Text>
                {item.description.length > 80
                  ? item.description.slice(0, 80) + "... "
                  : item.description}
              </Text>
              <Box
                display="flex"
                justifyContent={"flex-end"}
                alignItems="center"
                gap="20px"
              >
                <ViewFull data={item} />
                <Edit data={item} />
                <button onClick={() => handleDelete(item.id)}>
                  <DeleteIcon fontSize={"22x"} />
                </button>
              </Box>
            </Box>
          );
        })}
    </Box>
  );
}

export default NotesList;
