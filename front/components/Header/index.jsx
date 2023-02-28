import { Container, InputSearchContainer } from "./styles"

import logo from '../../assets/images/logo.svg';
import Image from "next/image";

export default function Header() {
  return(
    <Container>
      <Image src={logo} alt="Imagem Mycontacts" width="201"/>

      <InputSearchContainer>
       <input type="text" placeholder="Pesquise pelo nome"/>
      </InputSearchContainer>

    </Container>
  )

}
