import Link from 'next/link';
import Image from 'next/image';
import {
  Container, Header, ListContainer, Card,
} from './styles';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';

export default function ContactsList() {
  return (
    <Container>
      <Header>
        <strong>3 contatos</strong>
        <Link href="/new">Novo Contato</Link>
      </Header>

      <ListContainer>
        <header>
          <button type="button">
            <span>Nome</span>
            <Image src={arrow} alt="Arrow" />
          </button>
        </header>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Italo Maia</strong>
              <small>instagram</small>
            </div>
            <span>italomaiatech@gmail.com</span>
            <span>(+55) 31 992822389</span>
          </div>

          <div className="actions">
            <Link href="/">
              <Image src={edit} alt="Edit" />
              <button type="button">
                <Image src={trash} alt="Delete" />
              </button>
            </Link>
          </div>
        </Card>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Italo Maia</strong>
              <small>instagram</small>
            </div>
            <span>italomaiatech@gmail.com</span>
            <span>(+55) 31 992822389</span>
          </div>

          <div className="actions">
            <Link href="/">
              <Image src={edit} alt="Edit" />
              <button type="button">
                <Image src={trash} alt="Delete" />
              </button>
            </Link>
          </div>
        </Card>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Italo Maia</strong>
              <small>instagram</small>
            </div>
            <span>italomaiatech@gmail.com</span>
            <span>(+55) 31 992822389</span>
          </div>

          <div className="actions">
            <Link href="/">
              <Image src={edit} alt="Edit" />
              <button type="button">
                <Image src={trash} alt="Delete" />
              </button>
            </Link>
          </div>
        </Card>
      </ListContainer>
    </Container>
  );
}
