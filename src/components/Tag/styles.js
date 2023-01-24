import styled from "styled-components";

export const Container = styled.div`
  width: 121px;
  height: 24px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 12px;
  line-height: 14px;
  font-weight: 400;
  font-family: Roboto, sans-serif;

  border-radius: 8px;
  background: ${({theme}) => theme.COLORS.TAG};

  color: ${({theme}) => theme.COLORS.GRAY};

  &:hover{
    cursor: pointer;

  }

`