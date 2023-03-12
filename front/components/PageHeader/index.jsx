import Image from 'next/image';
import Link from 'next/link';

import arrow from '@/assets/images/icons/arrow.svg';
import { Container } from './styles';

export default function PageHeader({ title }) {
  return (
    <Container>
      <Link href="/">
        <Image src={arrow} alt="Back" />
        <span>Voltar</span>
      </Link>
      <h1>{title}</h1>
    </Container>
  );
}
