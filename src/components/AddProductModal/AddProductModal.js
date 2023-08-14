import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  ModalFooter,
  InputGroup,
  InputLeftElement,
  InputLeftAddon,
  Textarea,
} from "@chakra-ui/react";
import { RiAddFill } from "react-icons/ri";
import { MiddleButtonContainer } from "./styled";
import { ADD_PRODUCT } from "../../constants/urls";

import AuthContext from "../../contexts/AuthContext";

export function AddProductModal() {
  const navigate = useNavigate();
  const { token } = useContext(AuthContext)
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const [form, setForm] = useState({
    product_name: "",
    description: "",
    price: "",
    photo_url: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const body = {
      product_name: form.product_name,
      description: form.description,
      price: form.price,
      photo_url: form.photo_url,
    };
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    }

    console.log(body);
    if (body.product_name === "" || body.price === "" || body.photo_url === "") return alert("Fullfill Required Informations");
    
    
    const promisse = axios.post(ADD_PRODUCT, body, config);
    promisse.then(response => {
      onClose();
      navigate(0);
    });
    promisse.catch((err) => alert("Verify all information before submitting"));
  }

  return (
    <>
      <MiddleButtonContainer onClick={onOpen}>
        <RiAddFill color="#49AFBB" size={30} />
      </MiddleButtonContainer>

      <Modal
        AddProductModalRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Your Product</ModalHeader>
          <ModalCloseButton />
          <FormControl onSubmit={handleSubmit}>
            <ModalBody pb={6}>
              <FormLabel>Product Name</FormLabel>
              <InputGroup gap={3}>
                <Input
                  ref={initialRef}
                  type="text"
                  placeholder="Product Name"
                  name="product_name"
                  value={form.product_name}
                  onChange={handleChange}
                  required
                />
                <InputGroup width={150}>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                    fontSize="1.2em"
                    children="$"
                  />
                  <Input name="price"
                    value={form.price}
                    onChange={handleChange}
                    required />
                </InputGroup>
              </InputGroup>

              <FormLabel mt={4}>Product Photo</FormLabel>
              <InputGroup>
                <InputLeftAddon children="https://" />
                <Input
                  placeholder="Photo URL"
                  name="photo_url"
                  value={form.photo_url}
                  onChange={handleChange}
                  required
                />
              </InputGroup>
              <FormLabel mt={4}>Description</FormLabel>
              <Textarea
                placeholder="Description"
                name="description"
                value={form.description}
                onChange={handleChange}
                required
              />
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="teal" mr={3} onClick={handleSubmit}>
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </FormControl>
        </ModalContent>
      </Modal>
    </>
  );
}
