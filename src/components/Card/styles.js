import styled from "styled-components";
import { DEVICE_BREAKPOINT} from "../../styles/devicesBreakpoints"; 

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  align-items: center;
  justify-content: center;

  width: 21rem;
  height: 100%;
  padding: 2.4rem;

  .cardBtn {
    background: none;
    border: none;
    position: relative ;

    #btn-edit {
      width: 2.4rem;
      height: 2.2rem;

      position: absolute;
      left: 8.8rem;
      top: -2.4rem;
      
      color: ${({theme}) => theme.COLORS.LIGHT_300};

      cursor: pointer;
    }

    .btn-heart {
      width: 2.4rem;
      height: 2.2rem;

      position: absolute;
      left: 8.8rem;
      top: -2.4rem;

      cursor: pointer;
    }
  }
  
  
  
  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2.4rem;
  }
  
  
  .dishImg {
    width: 8rem;
    height: 8rem;
  }
  
  .dishTitle {
    font-size: 1.4rem;
    white-space: nowrap;
    font-weight: 500;
    text-align: center;
    color: ${({theme}) => theme.COLORS.LIGHT_300};
  }
  
  .dishDescription {
    display: none;
  }
  
  .price {
    font-size: 1.6rem;
    font-weight: 400;
    font-family: ${({theme}) => theme.FONTS.Secondary};
    color: ${({theme}) => theme.COLORS.CAKE_200};
    margin-bottom: 1.2rem;
  }
  
  .quantityItems {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.4rem;
    width: 100%;
    
    button {
      width: 100%;
    }
  }
  
  @media (min-width: ${DEVICE_BREAKPOINT.MD}) {
    width: 30rem;
    
    .dishImg {
      width: 15rem;
      height: 15rem;
    }
    
    .cardBtn{
      #btn-edit, .btn-heart {
        width: 3rem;
        height: 2.8rem;
      }
   }

   .dishTitle {
    font-size: 2rem;
    font-weight: 700;
   }

   .dishDescription {
    text-align: center;
    font-size: 1.2rem;
    font-weight: 400;
    font-family: ${({theme}) => theme.FONTS.Secondary};

    color: ${({theme}) => theme.COLORS.LIGHT_400};
    display: block;
   }

   .price {
    font-size: 3rem;
   }

   .quantityItems {
    flex-direction: row;
    gap: 1.6rem;
    
    > button {
      height: 3.2rem;
    }
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINT.LG}) {
   width: 40rem;

   .dishImg {
    width: 20rem;
    height: 20rem;
   }

   .cardBtn{
    > svg {
      width: 3.4rem;
      height: 3.2rem;
    }
   }

   .dishTitle {
    font-size: 2.4rem;
    font-weight: 700;
   }

   .dishDescription {
    text-align: center;
    font-size: 1.4rem;
    font-weight: 400;
    font-family: ${({theme}) => theme.FONTS.Secondary};

    color: ${({theme}) => theme.COLORS.LIGHT_400};
    display: block;
   }

   .price {
    font-size: 3.2rem;
   }

   .quantityItems {
    gap: 1.6rem;
    height: 4.8rem ;
    
    button {
      width: 9.2rem;
    }
   }
  }
`
