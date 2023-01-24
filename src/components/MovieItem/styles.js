import styled from 'styled-components'

export const Container = styled.div`
  width: 180px;
  height: 56px;

  border-radius: 10px;
  border: ${({ theme, isNew }) =>
    isNew ? `2px dashed ${theme.COLORS.GRAY_100}` : 'none'};

  background: ${({ theme, isNew }) =>
    isNew ? 'transparent' : theme.COLORS.GRAY_200};

  display: flex;
  align-items: center;
  padding-right: 10px;
  padding-left: 10px;

  > input {
    width: 140px;
    height: 24px;

    background: none;
    border: none;
    outline: none;

    padding-left: 16px;
    padding-right: 16px;

    color: ${({ theme }) => theme.COLORS.WHITE};

    font-family: Roboto;

    &::placeholder {
      color: ${({theme}) => theme.COLORS.GRAY_100}
    }
  }

  > button {
    border: none;
    background: none;

    > svg {
      width: 22px;
      height: 24px;

      border: none;

      color: ${({theme}) => theme.COLORS.RED}
    }
  }
`
