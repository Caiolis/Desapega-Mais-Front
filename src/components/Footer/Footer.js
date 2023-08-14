import { Link } from "react-router-dom";

import { Container, SubContainer, MiddleButtonContainer } from "./styled";
import { AiFillHome } from "react-icons/ai"
import { BiSolidUser } from "react-icons/bi"
import { AddProductModal } from "../AddProductModal/AddProductModal";



export default function Footer() {
  return (
    <Container>
      <SubContainer textAlign={"left"}>
        <Link to={"/home"}>
          <AiFillHome color="rgba(255, 255, 255, 55)" size={30}/>
        </Link>
      </SubContainer>
      <AddProductModal />
      <SubContainer textAlign={"end"}>
        <Link to={"/myinfo"}>
          <BiSolidUser color="rgba(255, 255, 255, 55)" size={30}/>
        </Link>
      </SubContainer>
    </Container>
  );
};