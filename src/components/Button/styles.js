import styled from "styled-components";
import { DEVICE_BREAKPOINT} from "../../styles/devicesBreakpoints"

export const Container = styled.button`
  width: 100%;
  height: 4.8rem;
  padding: 8px 16rem;

  display: flex;
  border: none;
  border-radius: 0.5rem;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  background-color: ${({theme}) => theme.COLORS.TOMATO_100};

  text-align: center;
  font-size: 1.4rem;
  font-weight: 500;
  font-family: ${({theme}) => theme.FONTS.Primary};
  color: ${({theme}) => theme.COLORS.LIGHT_100};

  cursor: pointer;

  @media (min-width: ${DEVICE_BREAKPOINT.MD}) {
    width: 17rem;
    padding: 1.2rem 2.4rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINT.MD}) {
      padding: 2.4rem 2rem;
  }
`;