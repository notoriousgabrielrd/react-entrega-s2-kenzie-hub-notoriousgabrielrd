import styled from "styled-components";

export const Container = styled.div`
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background: var(--grey-2);

@media(max-width: 800px) {
    display:flex ;
    height:1200px ;
    width:150vw ;
  }
`





export const Form = styled.form`
  width: 370px;
  height:450 ;
  background-color: var(--grey-3);
  border-radius: 8px;
  display: flex;
  margin-top: 20px;
  flex-direction: column;
  padding: 38px 38px 24px 18px;
  box-shadow: var(--box-shadow);



@media(max-width: 800px) {
  display:flex ;
    flex-direction: column;
    position: relative;
    max-width: 370px ;
  }
`
