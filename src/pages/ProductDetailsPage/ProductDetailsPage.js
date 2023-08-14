import { useNavigate, useParams } from "react-router-dom";
import { Container, ImageContainer, InformationContainer, ProductTitle, InlineContainer, Subtitle, Description, AdditionalInformation, AdditionalInformationText } from "./styled";
import { AiFillPhone } from "react-icons/ai"
import { MdAlternateEmail } from "react-icons/md";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

import React from "react";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../contexts/AuthContext";
import { Button } from "@chakra-ui/react";
import axios from "axios";

import { GET_SPECIFIC_PRODUCT } from "../../constants/urls";

export default function ProductDetailsPage() {
  const { idProduct } = useParams();
  const navigate = useNavigate();

  const { token } = useContext(AuthContext);
  const [ data, setData ] = useState();

  useEffect(() => {
    if (!token) navigate("/");
  }, []);
  useEffect(() => {
    const promisse = axios.get(`${GET_SPECIFIC_PRODUCT}${idProduct}`);
    promisse.then(response => setData(response.data));
    promisse.catch(err => console.error(err));
  }, []);

  return (
    data === undefined ? "Loading" : 
    <>
    <Header/>
      <Container>
    <ImageContainer>
      <img src={data.photo_url} />
    </ImageContainer> 
    <InformationContainer>
      <InlineContainer>
        <ProductTitle>{data.product_name}</ProductTitle>
        <Subtitle>SELLER: {data.name}</Subtitle>
      </InlineContainer>
      <AdditionalInformation>
        <AiFillPhone size={20}/> 
        <AdditionalInformationText>{data.phone}</AdditionalInformationText>
      </AdditionalInformation>
      <AdditionalInformation>
        <MdAlternateEmail size={20}/> 
        <AdditionalInformationText>{data.email}</AdditionalInformationText>
      </AdditionalInformation>
      <Description>
        {data.description}
      </Description>

      <InlineContainer>
        <ProductTitle><span>TOTAL: </span>${data.price}</ProductTitle>
        <Button colorScheme='teal' size='lg'>Talk to seller</Button>
      </InlineContainer>
    </InformationContainer>
    </Container>
    <Footer />
    </>
    
  );
};