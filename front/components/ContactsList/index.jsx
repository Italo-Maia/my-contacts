import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState, useMemo } from 'react';
import {
  Container, Header, Card, ListHeader,
} from './styles';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';
import { InputSearchContainer } from '../Header/styles';
// import Modal from '../Modal';
// import Loader from '../Loader';

export default function ContactsList() {
  const [contacts, setContacts] = useState([]);
  const [orderBy, setOrderBy] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredContacts = useMemo(() => contacts.filter((contact) => (
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  )), [contacts, searchTerm]);

  useEffect(() => {
    fetch(`http://localhost:3001/contacts?orderBy=${orderBy}`)
      .then(async (response) => {
        const json = await response.json();

        setContacts(json);
      });
  }, [orderBy]);

  function handleToogleOrderBy() {
    setOrderBy(
      (prevState) => (prevState === 'asc' ? 'desc' : 'asc'),
    );
  }

  function handleChangeSearchTerm(e) {
    setSearchTerm(e.target.value);
  }

  return (
    <Container>
      {/* <Loader /> */}
      {/* <Modal danger title="MODAL" text="TEXT" actionTitle="DELETAR" /> */}

      <InputSearchContainer>
        <input
          value={searchTerm}
          onChange={handleChangeSearchTerm}
          type="text"
          placeholder="Pesquise pelo nome"
        />
      </InputSearchContainer>

      <Header>
        <strong>
          {filteredContacts.length}
          {filteredContacts.length === 1 ? ' contato' : ' contatos'}
        </strong>
        <Link href="/new">Novo Contato</Link>
      </Header>

      {filteredContacts.length > 1 && (
      <ListHeader>
        <button
          type="button"
          onClick={handleToogleOrderBy}
        >
          <span>Nome</span>
          <Image
            className={orderBy === 'asc' ? 'arrowOver' : 'arrowDown'}
            src={arrow}
            alt="Arrow"
          />
        </button>
      </ListHeader>
      )}

      {filteredContacts.map((contact) => (
        <Card key={contact.id}>
          <div className="info">
            <div className="contact-name">
              <strong>{contact.name}</strong>
              {contact.category_name && (
              <small>{contact.category_name}</small>
              )}
            </div>
            <span>{contact.email}</span>
            <span>{contact.phone}</span>
          </div>

          <div className="actions">
            <Link href={`edit/${contact.id}}`}>
              <Image src={edit} alt="Edit" />
            </Link>
            <button type="button">
              <Image src={trash} alt="Delete" />
            </button>
          </div>
        </Card>
      ))}
    </Container>
  );
}
