import styled from "styled-components";

export const Container = styled.header`
  margin-top: 111px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

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
      color: #BCBCBC;
    }
  }
`








