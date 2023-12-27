import styled from "styled-components";
import { DEVICE_BREAKPOINT} from "../../styles/devicesBreakpoints"

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
  @keyframes slideIn {
    from {
      transform: translateY(-10vh);
      opacity: 0;
    }
  }  
  grid-area: content;
  padding: 5.6rem 3.6rem 9rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
 

  
  animation: slideIn ease-in 1.8s;

  > main {
    > h2 {
      font-size: 2.8rem;
      font-weight: 500;
      margin-bottom: 2.7rem;
      align-self: center;
    }
  
    .favorites {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
    }
  }


  @media (min-width: ${DEVICE_BREAKPOINT.MD}) {
    width: 100%;
    height: 100%;
    padding: 3.4 auto 2rem;
    align-items: center;
    justify-content: center;

    > main {
      align-items: center;
      justify-content: center;
      
      > h2 {
        align-self: start;
        font-size: 3.2rem;
        margin-bottom: 3.2rem;
      }

      .favorites {
        flex-direction: row;
        max-width: 106rem;
        gap: 4.8rem;
        
      }
    }
    

    
  }


`;

export const Card = styled.div`
  display: flex;
  gap: 1.3rem;
  align-items: center;
  justify-content: center;
  padding: 1.6rem 0;

  img {
    width: 7.2rem;
    height: 7.2rem;
  }

  h2 {
      width: 100%;
      font-size: 2rem;
      font-weight: 500;
      color: ${({theme}) => theme.COLORS.LIGHT_300};
  }

  button {
    background: none;
    border: none;

    color: ${({theme}) => theme.COLORS.TOMATO_400};
    
    font-family: ${({theme}) => theme.FONTS.Secondary};
    font-size: 1.2rem;
  }
`;