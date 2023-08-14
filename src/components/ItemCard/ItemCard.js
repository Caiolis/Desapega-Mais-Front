import { Container, ImageContainer, InformationContainer, ButtonContainer } from "./styled";
import { IconButton } from '@chakra-ui/react';
import { RiAddFill } from "react-icons/ri"


export default function ItemCard({ photo_url, name, product_name, price }) {
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
      <ButtonContainer>
      <IconButton
          colorScheme='teal'
          aria-label='Search database'
          icon={<RiAddFill color="white" size={25}/>}
          
        />
      </ButtonContainer>
    </Container>
  );
};