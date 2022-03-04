import styled, { css } from "styled-components";

export const Container = styled.button`
  background: ${(props) => props.backgroundColor ? props.backgroundColor : "var(--grey-1)"};
  /* background: ${(props) => props.backgroundColor && "green"}; */
  color: var(--grey-0);
 
  border: 1.5px solid ${(props) => props.backgroundColor};
  transition: 0.5s;
  width: ${(props) => props.width ? props.width : "100%"};
  height: ${(props) => props.height ? props.height : "48px "};
  padding: 10px 18px;
  font-size:var(--title-1) ;
  margin-left: 7px;
 
  `;


