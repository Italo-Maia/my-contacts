import Header from '@/components/Header';
import ContactsList from '../components/ContactsList';

export default function Home() {
  return (
    <>
      <Header withSearch />

      <ContactsList />
    </>
  );
}
