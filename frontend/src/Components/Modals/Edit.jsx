import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";

function Edit({ data }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [title, setTitle] = useState(data.title);
  const [description, setDescription] = useState(data.description);

  const dispatch = useDispatch();

  const hanedleEdit = async () => {
    const payload = { title, description };
    dispatch({ type: "API_REQUEST_START" });

    try {
      const res = await axios.put(
        `https://iwcn.onrender.com/note/${data.id}`,
        payload
      );
      await getNotes();
      dispatch({ type: "API_REQUEST_END" });

      onClose();
    } catch (err) {
      console.log(err);
      dispatch({ type: "API_REQUEST_END" });
    }
  };

  async function getNotes() {
    try {
      const res = await axios.get("https://iwcn.onrender.com/note");
      dispatch({ type: "GET_ALL_NOTES", payload: res.data.message });
    } catch (err) {}
  }
  return (
    <>
      <button onClick={onOpen}>
        <EditIcon />
      </button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Note</ModalHeader>
          <ModalCloseButton />

          <Input
            focusBorderColor="#ffa31a"
            value={title}
            placeholder="Enter Title..."
            _placeholder={{ color: "black" }}
            borderRadius="5px"
            color="black"
            bg="white"
            width={"80%"}
            border="1px solid #444444"
            margin={"auto"}
            marginTop="20px"
            onChange={(e) => setTitle(e.target.value)}
          />
          <Textarea
            focusBorderColor="#ffa31a"
            placeholder="Enter Description..."
            value={description}
            _placeholder={{ color: "black" }}
            borderRadius="5px"
            bg={"white"}
            color="black"
            width={"80%"}
            border="1px solid #444444"
            margin={"auto"}
            marginTop="20px"
            onChange={(e) => setDescription(e.target.value)}
          />

          <ModalFooter>
            <Button
              color={"white"}
              bgColor="#ffa31a"
              _hover={{ bgColor: "#e5a120" }}
              borderRadius="24px"
              onClick={() => hanedleEdit()}
            >
              Update
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export { Edit };
