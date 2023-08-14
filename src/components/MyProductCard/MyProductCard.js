import { Container, ImageContainer, InformationContainer, ButtonContainer } from "./styled";
import { IconButton } from '@chakra-ui/react';
import { FaCheck } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

import { MARK_AS_SELLED } from "../../constants/urls";
import axios from "axios";
import AuthContext from "../../contexts/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";


export default function MyProductCard({ photo_url, name, product_name, price, selled, product_id }) {
  const navigate = useNavigate();
  const { token } = useContext(AuthContext);

  function markAsSelled() {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const promisse = axios.post(`${markAsSelled}${product_id}`, config);
    promisse.then(response => navigate(0));
    promisse.catch(err => console.error(err));
  }

  return (
    <Container>
      <ImageContainer>
        <img src={photo_url}/>
      </ImageContainer>
      <InformationContainer>
        <h3>Seller: {name}</h3>
        <h1>{product_name}</h1>
        <h2>${price}</h2>
      </InformationContainer>
      <ButtonContainer onClick={markAsSelled}>
      <IconButton
          colorScheme='teal'
          aria-label='Search database'
          icon={selled ? <RxCross2 color="white" size={25}/> : <FaCheck color="white" size={25}/>}

        />
      </ButtonContainer>
    </Container>
  );
};