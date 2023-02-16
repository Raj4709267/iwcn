import React from "react";
import { Text } from "@chakra-ui/react";
import style from "./Home.module.css";
import { Loadder } from "../Components/Modals/Loadder";
import { useSelector } from "react-redux";
import NotesAdd from "../Components/NotesAdd/NotesAdd";
import NotesList from "../Components/NotesList/NotesList";
function Home() {

  const isloading=useSelector(store=>store.AppReducer.isLoading)
  return (
    <div className={style.home}>
      <Text
        fontSize={"30px"}
        fontWeight="bold"
        textAlign={"left"}
        margin={"50px 0 20px 0"}
        color="#ffa31a"
        className={style.heading}
      >
        My Notes
      </Text>
      <NotesAdd />
      <NotesList />
      {isloading && <Loadder />}
    </div>
  );
}

export default Home;
