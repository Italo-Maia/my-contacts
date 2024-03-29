import styled from 'styled-components';

export default styled.select`
  width: 100%;
  background: #fff;
  border-radius: 4px;
  height: 52px;
  border: none;
  border: 2px solid #fff;
  outline: none;
  box-shadow: 0px 4px 10px rgba(0, 0, 0,);
  padding: 0px 16px;
  font-size: 16px;
  transition: border-color 0.2s ease-in;
  appearance: none;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary.main};
  }
`;
