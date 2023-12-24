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
  padding: 1.6rem 5.6rem 3.3rem; 
  align-items: center;
  justify-content: center;
  animation: slideIn ease-in 1.8s;
  > main {
    display: flex;
    flex-direction: column;
    width: 100% ;
    align-items: center;    
    justify-content: center;
    gap: 1.6rem;    
    margin-top: 1.6rem;
    margin-bottom: 1.6rem;
    
    
    img {
      width: 26rem;
      height: 26rem;      
    }

    #info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 2.4rem;
      max-width: 55rem;

      h2 {
        font-size: 2.7rem;
        font-weight: 500;
        color: ${({theme}) => theme.COLORS.LIGHT_300};  
        text-align: center;
      }
      
      p {
        text-align: center;
      }

      #cartSelector {
        width: 100%;
        display: flex;
        flex-direction: row;
        margin-top: 4.8rem;

        gap: 1.6rem;
        justify-content: center;
        align-items: center;
      }
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINT.LG}) {
    padding-top: 2.4rem;

    > main {
      gap: 4.8rem;  
      margin-top: 4.2rem;
      margin-bottom: 9rem;
      flex-direction: row;
    
      img {
      width: 33rem;
      height: 33rem;      
    }

    #info {
      justify-content: flex-start; 
      max-width: 55rem;
      height: 30rem;
      
      h2 {
        font-size: 4rem;
        text-align: start;
      }

      p {
        text-align: start;
        font-size: 2.4rem;
      }
      
      #cartSelector {
        gap: 3.3rem;
        justify-content: flex-start;
       }
    }

  }
 }
`

export const DishIngredients = styled.div`
  display: flex;
  gap: 2.4rem;
  padding: 0 2rem;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  @media (min-width: ${DEVICE_BREAKPOINT.LG}) {
    align-items: start;
    padding: 0;
  }
`;