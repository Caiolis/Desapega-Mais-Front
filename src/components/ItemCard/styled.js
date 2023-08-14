import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 15px;
  padding: 10px 15px;
`;

export const ImageContainer = styled.div`
  text-align: center;
  img {
    max-width: 120px;
  }
`;

export const InformationContainer = styled.div`
  h3 {
    font-family: Poppins;
    font-size: 14px;
    font-weight: 300;
    color: #000;
  }
  h2 {
    font-family: Poppins;
    font-size: 16px;
    font-weight: 500;
    color: #49AFBB;
  }
  h1 {
    font-family: Poppins;
    font-size: 20px;
    font-weight: 600;
    color: #000;
  }
`;

export const ButtonContainer = styled.div``;