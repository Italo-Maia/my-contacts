import PropTypes from 'prop-types';
import FormGroup from '../FormGroup';
import { ButtonContainer, Form } from './styles';

import Input from '../stylizedComponents/Input';
import Select from '../stylizedComponents/Select';
import Button from '../stylizedComponents/Button';

export default function ContactForm({ buttonLabel }) {
  return (
    <Form>
      <FormGroup>
        <Input placeholder="Nome" />
      </FormGroup>

      <FormGroup>
        <Input placeholder="E-mail" />
      </FormGroup>

      <FormGroup>
        <Input placeholder="Telefone" />
      </FormGroup>

      <FormGroup>
        <Select>
          <option value="instagram">Instagram</option>
        </Select>

        <ButtonContainer>
          <Button type="submit">
            {buttonLabel}
          </Button>
        </ButtonContainer>
      </FormGroup>
    </Form>
  );
}
ContactForm.PropTypes = {
  buttonLabel: PropTypes.string.isRequired,
};
