import { createGlobalStyle } from "styled-components";


export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: 0;
    outline: 0;
}

body,input,button{
    font-family: 'Inter', sans-serif;
    font-size: 0.88rem;
}

button{
    cursor: pointer;
}

a{
    text-decoration: none;
}

:root{

--color-primary:#ff577f;
--color-primary-focus:#ff427f;
--color-primary-negative:#59223f;

/* grey palette */
--grey-0:#f8f9fa;
--grey-1:#868e96;
--grey-2:#343b41;
--grey-3:#212529;
--grey-4:#121214;

/* feedback palette */
--color-sucess:#3fe864;
--color-negative:#e83f5b;


--title-1:1rem;
--title-2:1rem;
--title-3:1rem;

--headline:0.75rem;
--headline-bold:0.75rem;
--headline-italic:0.75rem;



}

`
