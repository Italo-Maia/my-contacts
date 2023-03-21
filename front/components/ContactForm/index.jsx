import { useState } from 'react';

import PropTypes from 'prop-types';
import useErros from 'hooks/useErros';
import FormGroup from '../FormGroup';
import { ButtonContainer, Form } from './styles';

import isEmailValid from '@/utils/isEmailValid';

import Input from '../stylizedComponents/Input';
import Select from '../stylizedComponents/Select';
import Button from '../stylizedComponents/Button';

export default function ContactForm({ buttonLabel }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('');

  const { setError, removeError, getErrorMessageByFieldName } = useErros();

  function handleNameChange(e) {
    setName(e.target.value);

    if (e.target.value.length < 3) {
      setError({ field: 'name', message: 'Nome obrigatório, deve conter no mínimo 3 letras' });
    } else {
      removeError('name');
    }
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);

    if (e.target.value && !isEmailValid(e.target.value)) {
      setError({ field: 'email', message: 'E-mail inválido' });
    } else {
      removeError('email');
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup error={getErrorMessageByFieldName('name')}>
        <Input
          value={name}
          error={getErrorMessageByFieldName('name')}
          onChange={handleNameChange}
          placeholder="Nome"
        />
      </FormGroup>

      <FormGroup error={getErrorMessageByFieldName('email')}>
        <Input
          value={email}
          error={getErrorMessageByFieldName('email')}
          onChange={handleEmailChange}
          placeholder="E-mail"
        />
      </FormGroup>

      <FormGroup>
        <Input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Telefone"
        />
      </FormGroup>

      <FormGroup>
        <Select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
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
