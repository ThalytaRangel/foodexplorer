import styled from "styled-components";

export const Container = styled.button`
  width: 20rem;
  height: 5.6rem;
  padding: 1.2rem 3.2rem;

  display: flex;
  border: none;
  border-radius: 0.5rem;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;

  background-color: ${({theme}) => theme.COLORS.TOMATO_100};

  text-align: center;
  font-size: 1.4rem;
  font-weight: 500;
  font-family: ${({theme}) => theme.FONTS.Primary};
  color: ${({theme}) => theme.COLORS.LIGHT_100};

  cursor: pointer;

  
`;