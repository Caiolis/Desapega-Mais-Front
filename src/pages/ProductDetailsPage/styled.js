import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const ImageContainer = styled.div`
  width: 100%;
  background-color: #FFF;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    max-width: 100%;
    max-height: 450px;
  }
`;

export const InformationContainer = styled.div`
  width: 100%;
  padding: 20px;
`;

export const InlineContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProductTitle = styled.h1`
  font-family: Poppins;
  font-size: 24px;
  font-weight: 600;
  color: #49AFBB;
  span {
    font-size: 15px;
    font-weight: 500;
    color: #000
  }
`;

export const Subtitle = styled.h6`
  font-family: Poppins;
  font-size: 13px;
  font-weight: 500;
  color: #000;
`;

export const Description = styled.h6`
  font-family: Poppins;
  font-size: 14px;
  font-weight: 400;
  color: #999999;
  margin-top: 10px;
  margin-bottom: 30px;
`;

export const AdditionalInformation = styled.div`
  display: flex;
  align-items: center;
`;

export const AdditionalInformationText = styled.h6`
  font-family: Poppins;
  font-size: 14px;
  font-weight: 500;
  color: #000;
  margin: 8px 0px;
  margin-left: 10px;
`;