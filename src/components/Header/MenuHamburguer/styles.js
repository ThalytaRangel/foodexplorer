import styled from "styled-components";

export const Container = styled.div`
 width: 100%;
 height: 104px;  
 grid-area: header; 

    
    > header {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
            
      .menu-icon {      
         width: 2rem;
        height: 2rem;
        font-size: 2rem;
        color: white; 
      }
    
      svg {
      width: 1.8rem;
      height: 1.8rem ;
      font-size: 2rem;
      color: white;
      }
      
      div {       
      display: flex;
      gap: 1rem;
      align-items: center;
      justify-items: center; 
      

        #icon {
          width: 2.4rem;
          height: 2.4rem;

         fill: ${({theme}) => theme.COLORS.CAKE_100};   
        }

        h1 {
         width: max-content ;
         color: ${({theme}) => theme.COLORS.LIGHT_100};
         font-size: 2.1rem;
         font-family: ${({theme}) => theme.FONTS.Secondary};
         font-weight: 700;
        }
      }

    .mobile-button {
      background: none;
      border: none;
      width: fit-content;
      height: 3.2rem;

      > svg {
      width: 3.2rem;
      height: 3.2rem;

      fill: white;
      }

      #quantity {
        display: flex;
        justify-content: center;
        align-items: center;
        
        width: 2rem;
        height: 2rem;
        padding: .8rem;
        border-radius: 50%;
        
        background-color: ${({theme}) => theme.COLORS.TOMATO_100};
        font-size: 1.4rem;
        font-family: ${({ theme }) => theme.FONTS.Primary};
        color: ${({theme}) => theme.COLORS.LIGHT_100};
        

        position: relative;
        top: -4.3rem;
        right: -1.8rem;
      }
    }  
  }

  #open-menu {
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: 10;  
    
    

    >.header {
      height: 11.4rem;
      width: 100%;
      padding: 5.6rem 2.8rem 2.4rem ;
      background: ${({theme}) => theme.COLORS.DARK_700};

      display: flex;
      align-items: center;
      justify-content: flex-start;

      svg {
        width: 3rem;
        height: 3rem;
        justify-self: center;
      }
      
      span {
        font-size: 2.1rem;
        margin-left: 1.6rem;
        justify-self: center;
      }
    }
    
    > main {
      grid-area: "content";
      justify-self: center;
      background: ${({theme}) => theme.COLORS.DARK_400};
  
      width: 100%;
      height: 100%;
      max-height: 60rem;
      padding: 3.6rem 2.8rem 1.4rem;
  
      > div {
        margin-bottom: 3.6rem;
  
        input {
          max-width: 100%;
        }
      }
  
      button {
        width: 100%;
        padding: 1rem;
        border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_400};
        
        font-weight: 300;
      }
    }

  }

`