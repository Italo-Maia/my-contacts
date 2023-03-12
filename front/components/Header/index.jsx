import Image from 'next/image';
import { Container, InputSearchContainer } from './styles';

import logo from '../../assets/images/logo.svg';

export default function Header({ withSearch }) {
  return (
    <Container>
      <Image src={logo} alt="Imagem Mycontacts" width="201" />
      { withSearch
        && (
        <InputSearchContainer>
          <input type="text" placeholder="Pesquise pelo nome" />
        </InputSearchContainer>
        )}
    </Container>
  );
}
