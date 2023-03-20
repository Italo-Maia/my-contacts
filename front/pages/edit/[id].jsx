import ContactForm from '@/components/ContactForm';
import Header from '@/components/Header';
import PageHeader from '@/components/PageHeader';

export default function edit() {
  return (
    <>
      <Header />

      <PageHeader title="Editar Contato" />

      <ContactForm buttonLabel="Salvar Alterações" />
    </>
  );
}
