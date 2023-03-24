import Image from 'next/image';
import { Container } from './styles';

import logo from '@/assets/images/logo.svg';

export default function Header() {
  return (
    <Container>
      <Image priority src={logo} alt="Imagem Mycontacts" width="201" />
    </Container>
  );
}
