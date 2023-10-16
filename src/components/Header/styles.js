import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 104px;
  padding: 2.4rem 12rem;
    
  
  grid-area: header;
  background-color: ${({theme}) => theme.COLORS.DARK_600};

  header {
    width: 100%;
    display: flex;

    justify-content: space-between;
    gap: 3.2rem;
  }
`;

export const Input = styled.input`
  width: 58rem;
  height: 4.8rem;
  padding: 1.2rem 1.4rem;

  border: none;
  border-radius: 0.5rem;
  background-color: ${({theme}) => theme.COLORS.DARK_900};

  color: ${({theme}) => theme.COLORS.LIGHT_100};
   
  &::placeholder {    
    color: ${({theme}) => theme.COLORS.LIGHT_500};
  }

  &:focus {
    outline: solid 1px ${({theme}) => theme.COLORS.LIGHT_500};
  }


`;

export const LogOutBtn = styled.button`
 border: none;
 background: none;
 
 cursor: pointer;

 > svg {
  font-size: 3.2rem;
  color: ${({theme}) => theme.COLORS.LIGHT_100};
  }
`;
