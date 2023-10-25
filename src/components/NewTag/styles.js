import styled from "styled-components";

export const Container = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;

  height: 3.2rem;
  padding: 1rem 1.6rem;
  border-radius: 0.8rem;
  width: fit-content;

  background-color: ${({theme, isNew}) => isNew ? 'transparent' : theme.COLORS.LIGHT_600};
  border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.LIGHT_500}` : `none`};
  color: ${({theme}) => theme.COLORS.LIGHT_100};

  > button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
    border: none;
    width: 0.8rem;
    height: 0.8rem;
    
    svg {
      color: ${({theme}) => theme.COLORS.LIGHT_100};
      font-size: 0.8rem;
    }
    
  } 

  > input {
    width: 7rem;
    background: none;
    border: none;
    outline: none;
    color: ${({theme}) => theme.COLORS.LIGHT_100};

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }
  
`;