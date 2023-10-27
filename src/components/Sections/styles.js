import styled from "styled-components";

export const Container = styled.div`
  width: 108rem;
  margin-top: 4.8rem;
  display: flex;
  justify-content: start;
  flex-direction: column;
  gap: 2.3rem;

  > h2 {
    width: 100%;    
    font-size: 3.2rem;
    font-weight: 500;
    

    color: ${({theme}) => theme.COLORS.LIGHT_300};
    
  }
  
  > .carrossel {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2.7rem;
  }
  .carrossel:last-child {
    margin-bottom: 4.6rem
  }
  
`