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
  Spinner,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import { useEffect } from "react";

function Loadder({ data }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const hanleEdit = () => {};

  useEffect(() => {
    onOpen();
  });
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay  />
      <ModalContent
        bg={"transparent"}
        boxShadow="none"
        display={"flex"}
        justifyContent="center"
        alignItem={"center"}
        marginTop="50vh"
        height={"100px"}
      >
        <Spinner color="white" size={"md"} textAlign="center" marginLeft={"50%"} />
      </ModalContent>
    </Modal>
  );
}

export { Loadder };
