import { useState } from 'react';

import propTypes from 'prop-types';
import useErros from 'hooks/useErros';
import FormGroup from '../FormGroup';
import { ButtonContainer, Form } from './styles';

import isEmailValid from '@/utils/isEmailValid';

import Input from '../stylizedComponents/Input';
import Select from '../stylizedComponents/Select';
import Button from '../stylizedComponents/Button';
import formatPhone from '@/utils/formatPhone';

export default function ContactForm({ buttonLabel }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('');

  const {
    errors,
    setError,
    removeError,
    getErrorMessageByFieldName,
  } = useErros();
  const isFormValid = (name && errors.length === 0);

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

  function handlePhoneChange(e) {
    setPhone(formatPhone(e.target.value));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name, email, phone, category,
      }),
    };

    fetch('http://localhost:3001/contacts/', options);
  }

  return (
    <Form
      onSubmit={handleSubmit}
      noValidate
    >
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
          type="email"
          value={email}
          error={getErrorMessageByFieldName('email')}
          onChange={handleEmailChange}
          placeholder="E-mail"
        />
      </FormGroup>

      <FormGroup>
        <Input
          value={phone}
          onChange={handlePhoneChange}
          placeholder="Telefone"
          maxLength="15"
        />
      </FormGroup>

      <FormGroup>
        <Select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="instagram">Instagram</option>
          <option value="facebook">facebook</option>
        </Select>

        <ButtonContainer>
          <Button
            type="submit"
            disabled={!isFormValid}
          >
            {buttonLabel}
          </Button>
        </ButtonContainer>
      </FormGroup>
    </Form>
  );
}

ContactForm.propTypes = {
  buttonLabel: propTypes.string.isRequired,
};
