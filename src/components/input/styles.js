import styled, { css } from "styled-components";

export const Container = styled.div`
  text-align: left;
  margin-bottom: 30px;

  label {
    margin-left: 6px;
    color: var(--grey-1);
  }
`;

export const InputContainer = styled.div`
  background-color:var(--grey-2) ;
  background: var(--grey-2);
  padding: 0.4rem;
  width: 100%;
  transition: 0.5s;
  border: 1.5px solid var(--grey-3);
  margin-top: 10px;
  :focus-within {
    border: 1.5px solid var(--grey-0);
  }

  ${(props) =>
    props.isErrored &&
    css`
      border-color: var(--color-primary);
    `}

  input {
    background-color: green;
    background: transparent;
    align-items: center;
    flex: 1;
    border: 0;
    color: var(--grey-0);

    &::placeholder {
      color: var(--grey-1);
    }
   
  }
`;