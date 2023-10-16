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
  
`;

export const Content = styled.div`
  grid-area: "content";
  padding-top: 2.4rem;  

  > main {
    display: flex;
    align-items: center;    
    justify-content: center;
    gap: 4.8rem;    
    margin-top: 4.2rem;

    #info {
      display: flex;
      flex-direction: column;
      justify-content: start;
      gap: 2.4rem;
      max-width: 68rem;

      h2 {
        font-size: 4rem;
        font-weight: 500;
        color: ${({theme}) => theme.COLORS.LIGHT_300};        
      }
    }
  }
`;

export const Ingredients = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 2.4rem;
`;