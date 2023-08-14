import styled from "styled-components";

export const BlueBackground = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: #49AFBB;
`;

export const AlignContainer = styled.div`
  width: 100%;
  padding: 0px 30px;
  text-align: center;
`;

export const SubTitle = styled.h2`
  font-family: 'Poppins', 'sans-serif';
  font-weight: 300;
  font-size: 24px;
  color: #FFF;
  margin-top: 8px;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0px 20px;
  margin-top: 100px;
`;

export const RegisterButton = styled.button`
  border: 0px;
  border-radius: 5px;
  outline: none;
  background-color: #FFF;
  color: #49AFBB;
  font-family: 'Poppins', 'sans-serif';
  font-weight: 400;
  font-size: 18px;
  height: 50px;
  width: 125px;
  &:hover {
    background-color: rgba(255, 255, 255, 0.7);
  }
`;
export const LogInButton = styled.button`
  border: 2px solid #FFF;
  border-radius: 5px;
  outline: none;
  background-color: transparent;
  color: #FFF;
  font-family: 'Poppins', 'sans-serif';
  font-weight: 400;
  font-size: 18px;
  height: 50px;
  width: 125px;
  &:hover {
    background-color: #FFF;
    color: #49AFBB;
  }
`;