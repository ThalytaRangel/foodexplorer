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
`

export const Content = styled.div`
  @keyframes slideIn {
    from {
      transform: translateY(-10vh);
      opacity: 0;
    }
  }
  grid-area: content;
  width: 100%;
  max-width: 112rem;
  padding: 1.6rem 5.6rem 3.3rem; 
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  animation: slideIn ease-in 1.8s;

  .back {
    font-size: 1.6rem;

    svg {
      font-size: 2.2rem;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINT.LG}) {
    width: 100%;
    height: 100%;

    .back {
    margin-top: 4rem;
    font-size: 2.4rem;
   }
  }  
`

export const Form = styled.form`
  margin-top: 2.4rem; 
  margin-bottom: 11rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.4rem;

  h2 {
    align-self: start;
    font-size: 2.8rem;
    font-weight: 500;
    color: ${({theme}) => theme.COLORS.LIGHT_300}
  }

  > .infos {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;    
    gap: 2.4rem;
    
    #label {
      display: flex;
      width: 100%;
      flex-direction: column;
      gap: 1.6rem;

      h3 {
        font-family: ${({theme}) => theme.FONTS.Secondary};
        font-size: 1.6rem;
        font-weight: 400;
        color: ${({theme}) => theme.COLORS.LIGHT_400};        
      }
    }

    .input-wrapper {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 1.6rem;
      
      > label {
          font-family: ${({theme}) => theme.FONTS.Secondary};
          color: ${({theme}) => theme.COLORS.LIGHT_400};
        }

      > .edit {
        background-color: ${({theme}) => theme.COLORS.DARK_800};
        width: 100%;
        border: none;
        outline: none;
      }     
           
      #categoria {
        width: 100%;
        height: 4.8rem;
        padding: 1.6rem;
        border: none;
        border-radius: 0.5rem;
        background-color: ${({theme}) => theme.COLORS.DARK_800};
        
        color: ${({theme}) => theme.COLORS.LIGHT_300};
      }
      
      #price {
        width: 100%;
        border: none;
        outline: none;
      }      
    }
  }

  .textarea-wrapper {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: stretch;
      gap: 1.6rem;
      
      > label {
          font-family: ${({theme}) => theme.FONTS.Secondary};
          color: ${({theme}) => theme.COLORS.LIGHT_400};
        }

    #description {
      width: 100%;
      height: 15rem;
      padding: 1.4rem;

      display: block;
      align-self: stretch;
      resize: none;
  
      background-color: ${({theme}) => theme.COLORS.DARK_800};

      border: none;
      border-radius: 0.8rem;

      font-size: 1.6rem;
      font-weight: 400;
      font-family: ${({theme}) => theme.FONTS.Secondary};

      color: ${({theme}) => theme.COLORS.LIGHT_100} ;

      &::placeholder {
        color: ${({theme}) => theme.COLORS.LIGHT_500};
      }

    }
  }
   
  .btn-save {
     width: 100%;
     height: 4.8rem;
     padding: 1.2rem 2rem;
     margin-top: 3.2rem;
     border-radius: 0.5rem;
     border: none;
  
     background-color: ${({theme}) => theme.COLORS.TOMATO_400};
  
     text-align: center;
     font-size: 1.4rem;
     font-weight: 500;
     color: ${({theme}) => theme.COLORS.LIGHT_100};
  }    
  

  @media (min-width: ${DEVICE_BREAKPOINT.LG}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0;

    > h2 {
      margin-bottom: 3.2rem;
      margin-top: 2.4rem;
      font-size: 3.2rem;
    }

    > .infos {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;    
    gap: 3.2rem;
    margin-bottom: 3.2rem;
   }
   #categoria {
      width: 24rem;
    }
    
   #price {
    width: 24rem;
  } 

  .btn-save {
    width: 17rem;
    height: 4.8rem;
    padding: 1.2rem 2rem;
    margin-top: 3.2rem;
    border-radius: 0.5rem;

    display: flex;
    align-self: flex-end;
    justify-content: center;
    align-items: center;
  }
}
`

export const InputFile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem; 
  width: 100%;

  :first-child {
    font-family: ${({theme}) => theme.FONTS.Secondary};
    color: ${({theme}) => theme.COLORS.LIGHT_400};
  }

  :nth-child(2) {
    width: 100%;
    height: 4.8rem;
    padding: 1.2rem 3.2rem;
    border-radius: 0.8rem;

    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({theme}) => theme.COLORS.DARK_800};

    color: ${({theme}) => theme.COLORS.LIGHT_100} ;
    text-align: start;
    font-size: 1.4rem;
    font-weight: 500;

    > svg {
      width: 2.4rem;
      height: 2.4rem;
      margin-right: 0.8rem;      
    }
    #image {
      display: none;
    }
  }  

  @media (min-width: ${DEVICE_BREAKPOINT.LG}) {
    :nth-child(2) {
     text-align: center;
    }
  }
` 

export const Ingredients = styled.div`
  width: 100%;
  height: 4.8rem;
  padding: 0.4rem 0.8rem;
  border-radius: 0.8rem;

  display: flex;
  align-items: center;
  justify-content: start;
  gap: 1.6rem;

  background-color: ${({theme}) => theme.COLORS.DARK_800}; 
  
  @media (min-width: ${DEVICE_BREAKPOINT.LG}) {
    width: 85rem;
  }
  
`
