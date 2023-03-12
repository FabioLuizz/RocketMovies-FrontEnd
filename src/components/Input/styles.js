import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 55px;

  display: flex;
  align-items: center;
  padding: 0px 16px;

  border-radius: 10px;
  background-color: ${({theme}) => theme.COLORS.GRAY_200};

  color: ${({theme}) => theme.COLORS.GRAY_100};

  > input {
    font-size: 14px;
    font-family: Roboto slab;

    background-color: ${({theme}) => theme.COLORS.GRAY_200}; 
    border: none;
    outline: none;
    color: ${({theme}) => theme.COLORS.WHITE};
  }

  > svg {
    margin-right: 8px;
  }
`