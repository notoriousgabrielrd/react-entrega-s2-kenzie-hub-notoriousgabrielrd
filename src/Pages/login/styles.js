import styled from "styled-components";

export const Container = styled.div`
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background: var(--grey-2);

@media(max-width: 800px) {
  height: 120vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  width:120vw ;

}

`





export const Form = styled.form`
  max-width: 370px;
  max-height:350px ;
  background-color: var(--grey-3);
  border-radius: 8px;
  display: flex;
  margin-top: 20px;
  flex-direction: column;
  padding: 38px 38px 24px 18px;
  box-shadow: var(--box-shadow);
`
