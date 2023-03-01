import Link from 'next/link';
import { Container, Header } from './styles';

export default function ContactsList() {
  return (
    <Container>
      <Header>
        <strong>3 contatos</strong>
        <Link href="/">Novo Contato</Link>
      </Header>
    </Container>
  );
}
