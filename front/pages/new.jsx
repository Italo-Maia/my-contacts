import ContactForm from '@/components/ContactForm';
import Header from '@/components/Header';
import PageHeader from '@/components/PageHeader';

export default function NewContact() {
  return (
    <>
      <Header />
      <PageHeader title="Novo Contato" />
      <ContactForm buttonLabel="Cadastrar" />
    </>
  );
}
