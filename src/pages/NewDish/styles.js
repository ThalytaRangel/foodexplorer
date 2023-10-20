import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh; 
 
  
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-rows: 104px auto 77px;
  grid-template-areas: 
  "header"
  "content"
  "footer";
`

export const Content = styled.div`
  grid-area: content;
  margin: auto;
  max-width: 112rem;
`

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  h2 {
    align-self: start;
    margin-bottom: 3.2rem;
    margin-top: 2.4rem;

    font-size: 3.2rem;
    font-weight: 500;
    color: ${({theme}) => theme.COLORS.LIGHT_300}
  }

  > #infos {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content:center;
    gap: 3.2rem;
  }

`

export const Ingredients = styled.div`
`

