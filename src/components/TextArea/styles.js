import styled from 'styled-components'

export const Container = styled.textarea`
  width: 100%;
  height: 274px;

  padding: 19px 16px;

  resize: none;
  border: none;
  border-radius: 10px;

  color: ${({ theme }) => theme.COLORS.RED};
  background-color: ${({ theme }) => theme.COLORS.GRAY_200};

  font-size: 16px;
  font-family: Roboto;

  ::-webkit-scrollbar {
    width: 8px;
    height: 20px;
    background: rgba(0, 0, 0, 0);
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.COLORS.RED};
    border-radius: 15px;
  }
`
