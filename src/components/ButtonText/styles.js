import styled from "styled-components";

export const Container = styled.button`
  font-size: 16px;
  font-weight: 400;
  line-height: 21px;
  align-items: center;

  gap: 6px;

  color: ${({theme}) => theme.COLORS.RED};
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_BLACK_800};

  border: none;

  > svg {
    margin-right: 6px;
  }
`