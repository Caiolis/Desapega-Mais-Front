import {
  BlueBackground,
  AlignContainer,
  SubTitle,
  ButtonContainer,
  RegisterButton,
  LogInButton,
} from "./styled";
import whiteLogo from "../../assets/imgs/White Desapega Mais.png";
import { Link } from "react-router-dom";

export default function SplashPage() {
  return (
    <BlueBackground>
      <AlignContainer>
        <img src={whiteLogo} />
        <SubTitle>Se desfaça rapido.</SubTitle>

        <ButtonContainer>
        <Link to={"/signup"}>
          <RegisterButton type="button">Sign Up</RegisterButton>
        </Link>
          <Link to={"/login"}>
            <LogInButton type="button">Sign In</LogInButton>
          </Link>
        </ButtonContainer>
      </AlignContainer>
    </BlueBackground>
  );
}