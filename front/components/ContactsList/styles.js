import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 32px;
  position: relative;
`;

export const InputSearchContainer = styled.div`
  margin-top: 48px;
  width: 100%;

  input {
    border-radius: 25px;
    border: none;
    height: 50px;
    background-color: #FFFFFF;
    box-shadow: 8px 4px 10px rgba(0, 0, 0, 0.04);
    width: 100%;
    outline: 0;
    padding: 0 16px;

    &::placeholder {
      color: #777777;
    }
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;

  strong {
    color: #222;
    font-size: 24px;
  }

  a {
    color: #5061FC;
    font-weight: bold;
    text-decoration: none;
    border: 2px solid #5061FC;
    padding: 8px 16px;
    border-radius: 4px;
    transition: all 0.2s ease-in;

    &:hover {
      background: ${({ theme }) => theme.colors.primary.main};
      color: #FFF;
    }
  }
`;

export const ListHeader = styled.header`
  margin-top: 24px;
  margin-bottom: 8px;

  button {
    background: transparent;
    border: none;
    display: flex;
    align-items: center;

    span {
      margin-right: 8px;
      font-size: 17px;
      font-weight: bold;
      color: ${({ theme }) => theme.colors.primary.main};
    }

    .arrowOver {
      transform: rotate(180deg);
      transition: transform 0.2s ease-in;
    }

    .arrowDown {
      transform: rotate(0deg);
      transition: transform 0.2s ease-in;
    }
  }
`;

export const Card = styled.div`
  background: #FFF;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  padding: 16px;
  margin-top: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .info {
    display: block;
    .contact-name {
      display: flex;
      align-items: center;

      small {
        background: ${({ theme }) => theme.colors.primary.lighter};
        color: ${({ theme }) => theme.colors.primary.main};
        font-weight: bold;
        text-transform: uppercase;
        padding: 4px;
        border-radius: 8px;
        margin-left: 4px;
      }
    }
    
    span {
      display: block;
      font-size: 14px;
      color: #777;
    }
  }
  .actions {
    display: flex;
    align-items: center;

    button {
      background: '#000';
      border: none;
      margin-left: 8px;
    }
  }
`;
