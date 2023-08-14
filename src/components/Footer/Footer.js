import { Link } from "react-router-dom";

import { Container, SubContainer, MiddleButtonContainer } from "./styled";
import { AiFillHome } from "react-icons/ai"
import { BiSolidUser } from "react-icons/bi"
import { RiAddFill } from "react-icons/ri"

export default function Footer() {
  return (
    <Container>
      <SubContainer textAlign={"left"}>
        <Link to={"/home"}>
          <AiFillHome color="rgba(255, 255, 255, 55)" size={30}/>
        </Link>
      </SubContainer>
      <MiddleButtonContainer>
      <Link to={"/home"}>
        <RiAddFill color="#49AFBB" size={30}/>
      </Link>
      </MiddleButtonContainer>
      <SubContainer textAlign={"end"}>
        <Link to={"/home"}>
          <BiSolidUser color="rgba(255, 255, 255, 55)" size={30}/>
        </Link>
      </SubContainer>
    </Container>
  );
};