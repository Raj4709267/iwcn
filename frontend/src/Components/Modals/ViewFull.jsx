import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { ViewIcon } from "@chakra-ui/icons";

function ViewFull({ data }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <button onClick={onOpen}>
        <ViewIcon />
      </button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader> {data.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{data.description}</ModalBody>

          <ModalFooter>
            <Button
              color={"white"}
              bgColor="#ffa31a"
              _hover={{ bgColor: "#e5a120" }}
              borderRadius="24px"
              onClick={onClose}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export { ViewFull };
