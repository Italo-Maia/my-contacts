import Header from '@/components/Header';
import PageHeader from '@/components/PageHeader';
import Button from '@/components/stylizedComponents/Button';
import Input from '@/components/stylizedComponents/Input';
import Select from '@/components/stylizedComponents/Select';

export default function NewContact() {
  return (
    <>
      <Header />
      <PageHeader title="Novo Contato" />
      <Input type="text" placeholder="Nome" />
      <Select>
        <option value="1"> Instagram </option>
      </Select>
      <Button type="button">
        Salvar Alterações
      </Button>
      <Button
        disabled
        type="button"
      >
        Salvar Alterações
      </Button>
    </>
  );
}
