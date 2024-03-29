import styled from "styled-components";

export const Container = styled.div`
 @keyframes appear {
   from {
     opacity: 0;
    }
  }
  @keyframes slideIn {
  from {
    transform: translateX(-10vh);
    opacity: 0;
  }
  }
     
 width: 100%;
 height: 104px; 
 animation: appear ease-in 1.8s;

    > header {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      gap: 1.6rem;
      grid-area: header; 
      
            
      .menu-icon {      
        width: 3rem;
        height: 3rem;
        font-size: 2rem;
        color: white; 
        
        cursor: pointer;         
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
    display: grid;
    grid-template-areas: "header"
    "content"
    "footer";
    grid-template-rows: 11.4rem auto 3rem;

    height: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;    
    overflow-x: hidden;
    z-index: 5;  
    
    animation: slideIn ease-in 1.3s;

    >.header {
      height: 100%;
      width: 100%;
      padding: 5.6rem 2.8rem 2.4rem ;
      background: ${({theme}) => theme.COLORS.DARK_700};

      display: flex;
      align-items: center;
      justify-content: flex-start;
      grid-area: header;

      svg {
        width: 3rem;
        height: 3rem;
        justify-self: center;
        cursor: pointer;
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
      
      padding: 3.6rem 2.8rem 1.4rem;
  
      > div {
        margin-bottom: 3.6rem;
  
        input {
          max-width: 100%;
        }
      }
  
      .btn-header {
        font-size: 2.4rem;
        font-weight: 300;
        color: ${({ theme }) => theme.COLORS.LIGTH_300};

        width: 100%;
        padding: 1rem;
        border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK};
        
        font-weight: 300;
      }
    }

    &::-webkit-scrollbar {
        width: 0.3rem;
      }

      &::-webkit-scrollbar-track {
        border-radius: 1rem;
        background: ${({theme}) => theme.COLORS.DARK_800};
      }

      &::-webkit-scrollbar-thumb {
        background: ${({theme}) => theme.COLORS.DARK_800};
      }

      &::-webkit-scrollbar-thumb:hover {
        background-color: ${({theme}) => theme.COLORS.DARK_600};
      }

      &::-webkit-scrollbar-thumb:active {
        background-color: ${({theme}) => theme.COLORS.DARK_600};
      }


  }

`