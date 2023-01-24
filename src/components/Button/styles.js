import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  height: 56px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 10px;
  border: none;

  background-color: ${({theme, isNew}) => isNew ? theme.COLORS.RED : theme.COLORS.BACKGROUND_BLACK_900};
  color: ${({theme}) => theme.COLORS.WHITE};

  > svg {
    margin-right: 8px;
  }

`